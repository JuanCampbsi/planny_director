import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CorredorId = number | string | null;

interface EventMapaState {
  isValueEventMapaSudeste: boolean;
  isValueEventMapaSul: boolean;
  isValueEventMapaOman: boolean;
  isValueEventMapaNorte: boolean;
  isValueEventMapaPelotas: boolean;
  isValueEventMapaDisableSudeste: boolean;
  isValueEventMapaDisableSul: boolean;
  isClickEvent: boolean;
  selectedCorredor: CorredorId;
}

const initialState: EventMapaState = {
  isValueEventMapaSudeste: false,
  isValueEventMapaSul: false,
  isValueEventMapaOman: false,
  isValueEventMapaNorte: false,
  isValueEventMapaPelotas: false,
  isValueEventMapaDisableSudeste: false,
  isValueEventMapaDisableSul: false,
  isClickEvent: false,
  selectedCorredor: null,
};

export const isEventMapas = createSlice({
  name: 'isEventMapa',
  initialState,
  reducers: {
    isAddValueEventMapaSudeste: (state, action: PayloadAction<boolean>) => {
      state.isValueEventMapaSudeste = action.payload;
    },
    isValueEventMapaSul: (state, action: PayloadAction<boolean>) => {
      state.isValueEventMapaSul = action.payload;
    },
    isAddValueEventMapaOman: (state, action: PayloadAction<boolean>) => {
      state.isValueEventMapaOman = action.payload;
    },
    isAddValueEventMapaNorte: (state, action: PayloadAction<boolean>) => {
      state.isValueEventMapaNorte = action.payload;
    },
    isAddValueEventMapaPelotas: (state, action: PayloadAction<boolean>) => {
      state.isValueEventMapaPelotas = action.payload;
    },
    isAddValueEventMapaDisableSudeste: (state, action: PayloadAction<boolean>) => {
      state.isValueEventMapaDisableSudeste = action.payload;
    },
    isAddValueEventMapaDisableSul: (state, action: PayloadAction<boolean>) => {
      state.isValueEventMapaDisableSul = action.payload;
    },
    setSelectedCorredor: (state, action: PayloadAction<CorredorId>) => {
      state.selectedCorredor = action.payload;
    },
  },
});

export const {
  isAddValueEventMapaSudeste,
  isValueEventMapaSul,
  isAddValueEventMapaOman,
  isAddValueEventMapaNorte,
  isAddValueEventMapaPelotas,
  isAddValueEventMapaDisableSudeste,
  isAddValueEventMapaDisableSul,
  setSelectedCorredor,
} = isEventMapas.actions;
