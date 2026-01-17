import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.goit.global';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;

        try {
            const response = await fetch(`${BASE_URL}/contacts`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch contacts');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;

        try {
            const response = await fetch(`${BASE_URL}/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ name, number }),
            });

            if (!response.ok) {
                throw new Error('Failed to add contact');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;

        try {
            const response = await fetch(`${BASE_URL}/contacts/${contactId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete contact');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
