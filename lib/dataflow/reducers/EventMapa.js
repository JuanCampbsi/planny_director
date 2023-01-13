import { createSlice } from '@reduxjs/toolkit';
export const isEventMapas = createSlice({
    name: 'isEventMapa',
    initialState: {
        isValueEventMapaSudeste: false,
        isValueEventMapaSul: false,
        isValueEventMapaOman: false,
        isValueEventMapaNorte: false,
        isValueEventMapaPelotas: false,
        isValueEventMapaDisableSudeste: false,
        isValueEventMapaDisableSul: false,
        isClickEvent: false,
        selectedCorredor: null,
    },
    reducers: {
        isAddValueEventMapaSudeste: (state, action) => {
            state.isValueEventMapaSudeste = action.payload;
        },
        isValueEventMapaSul: (state, action) => {
            state.isValueEventMapaSul = action.payload;
        },
        isAddValueEventMapaOman: (state, action) => {
            state.isValueEventMapaOman = action.payload;
        },
        isAddValueEventMapaNorte: (state, action) => {
            state.isValueEventMapaNorte = action.payload;
        },
        isAddValueEventMapaPelotas: (state, action) => {
            state.isValueEventMapaPelotas = action.payload;
        },
        isAddValueEventMapaDisableSudeste: (state, action) => {
            state.isValueEventMapaDisableSudeste = action.payload;
        },
        isAddValueEventMapaDisableSul: (state, action) => {
            state.isValueEventMapaDisableSul = action.payload;
        },
        setSelectedCorredor: (state, action) => {
            state.selectedCorredor = action.payload;
        },
    },
});
export const { isAddValueEventMapaSudeste, isValueEventMapaSul, isAddValueEventMapaOman, isAddValueEventMapaNorte, isAddValueEventMapaPelotas, isAddValueEventMapaDisableSudeste, isAddValueEventMapaDisableSul, setSelectedCorredor, } = isEventMapas.actions;
//# sourceMappingURL=EventMapa.js.map