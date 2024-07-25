import React from 'react';
import s from './contact_form.module.scss'
import {useFormik} from "formik";
import {useAppDispatch, useAppSelector} from "../../redux/reduxHooks";
import {setContactForm} from "../../redux/btnsSlice";
import errorImg from '../../assets/fail.svg'
import successImg from '../../assets/correct.svg'

type FormValuesType = {
    name: string;
    telephone: string;
    agree: boolean;
}
type FormErrorsType = {
    name: string;
    telephone: string;
    agree: string;
}

function ContactForm() {
    const contactForm = useAppSelector(state => state.btns.contactForm)
    const dispatch = useAppDispatch()

    const formik = useFormik<FormValuesType>({
        validate: (values) => {
            const errors: Partial<FormErrorsType> = {};
            if (!values.name) {
                errors.name = "Укажите имя";
            } else if (/\d/.test(values.name)) {
                errors.name = "Имя не должно содержать цифры";
            }
            if (!values.telephone) {
                errors.telephone = "Укажите телефон";
            } else if (!/^\+?\d{10,15}$/.test(values.telephone)) {
                errors.telephone = "Неправильный формат телефона. Пример: +1234567890";
            }
            if (!values.agree) {
                errors.agree = 'Дайте согласие';
            }

            return errors;
        },
        initialValues: {
            name: contactForm.nameInput,
            telephone: contactForm.numberInput,
            agree: contactForm.agreeInput,
        },
        onSubmit: async (values) => {
            try {
                const response = await fetch('https://some-server.ru/api/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                });
                if (!response.ok) {
                    throw new Error('Сеть не отвечает');
                }
                const result = await response.json();
                console.log('Success:', result);
                alert('Форма успешно отправлена!');
            } catch (error) {
                console.error('Error:', error);
                alert('Ошибка при отправке формы');
            }
        },
    });


    return (
        <section className={s.wrapper} id={'form'}>
            <div className={s.container}>
                <h3>Отправить форму</h3>
                <form className={s.form} onSubmit={formik.handleSubmit}>
                    <div className={s.input_wrapper}>
                        <div className={s.input_container}>
                            <input
                                type="text"
                                placeholder={'Имя'}
                                className={`${s.name_input} ${formik.errors.name ? s.error : ''}`}
                                {...formik.getFieldProps("name")}
                                onChange={(e) => {
                                    formik.setFieldValue("name", e.currentTarget.value);
                                    dispatch(setContactForm({...contactForm, nameInput: e.currentTarget.value}))
                                }}
                            />
                            {formik.errors.name ? (
                                <img src={errorImg} alt="error image"/>
                            ) : formik.values.name.length !== 0 ? (
                                <img src={successImg} alt="success image"/>
                            ) : null}
                        </div>
                        {formik.errors.name ? <span>{formik.errors.name}</span> : null}
                    </div>
                    <div className={s.input_wrapper}>
                        <div className={s.input_container}>
                            <input
                                type="text"
                                placeholder={'Телефон'}
                                className={`${s.number_input} ${formik.errors.telephone ? s.error : ''}`}
                                {...formik.getFieldProps("telephone")}
                                onChange={(e) => {
                                    formik.setFieldValue("telephone", e.currentTarget.value);
                                    dispatch(setContactForm({...contactForm, numberInput: e.currentTarget.value}))
                                }}
                            />
                            {formik.errors.telephone ? (
                                <img src={errorImg} alt="error image"/>
                            ) : formik.values.telephone.length !== 0 ? (
                                <img src={successImg} alt="success image"/>
                            ) : null}
                        </div>
                        {formik.errors.telephone ? <span>{formik.errors.telephone}</span> : null}
                    </div>
                    <div className={s.input_wrapper}>
                        <label>
                            <input type={'checkbox'}
                                   {...formik.getFieldProps("agree")}
                                   onChange={(e) => {
                                       formik.setFieldValue("agree", e.currentTarget.checked);
                                       dispatch(setContactForm({...contactForm, agreeInput: e.currentTarget.checked}))
                                   }}
                            />
                            <span>Согласен, отказываюсь</span>
                        </label>
                        {formik.errors.agree ? <span style={{marginLeft: '10px'}}>{formik.errors.agree}</span> : null}
                    </div>
                    <input type="submit" disabled={Object.keys(formik.errors).length !== 0}/>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;