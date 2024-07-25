import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface btnsState {
    openMenu: boolean
    openAnswer: string[]
    contactForm: ContactFormType
}

type ContactFormType = {
    nameInput: string
    numberInput: string
    agreeInput: boolean
}

const initialState: btnsState = {
    openMenu: false,
    openAnswer: [],
    contactForm: {
        nameInput: '',
        numberInput: '',
        agreeInput: false
    }

}

export const counterSlice = createSlice({
    name: 'btnsSlice',
    initialState,
    reducers: {
        setOpen: (state, action: PayloadAction<boolean>) => {
            state.openMenu = action.payload
        },
        setOpenAnswer: (state, action: PayloadAction<string>) => {
            const id = action.payload
            if (state.openAnswer.includes(id)) {
                state.openAnswer = state.openAnswer.filter((item) => item !== id)
            } else {
                state.openAnswer.push(id)
            }
        },
        setContactForm: (state, action: PayloadAction<ContactFormType>) => {
            state.contactForm = action.payload
        }
    }

})

// Action creators are generated for each case reducer function
export const {setOpen, setOpenAnswer, setContactForm} = counterSlice.actions

export default counterSlice.reducer