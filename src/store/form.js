import { createSlice } from "@reduxjs/toolkit";

const regExp = "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
const IPPattern = new RegExp(`^${regExp}\\.${regExp}\\.${regExp}\\.${regExp}$`);
const PortPattern = new RegExp(
  "^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$"
);

const checkValidity = (value, pattern = new RegExp("(.|\\s)*\\S(.|\\s)*")) => {
  if (value.length !== 0) {
    if (pattern.test(value)) {
      return true;
    }
  }
  return false;
};

const formSlice = createSlice({
  name: "form",
  initialState: {
    editForm: {
      name: {
        value: "",
        isValid: true,
      },
      IP: {
        value: "",
        isValid: true,
      },
      port: {
        value: "",
        isValid: true,
      },
    },
    addForm: {
      name: {
        value: "",
        isValid: true,
      },
      IP: {
        value: "",
        isValid: true,
      },
      port: {
        value: "",
        isValid: true,
      },
    },
    pattern: {
      name: undefined,
      IP: IPPattern,
      port: PortPattern,
    },
  },
  reducers: {
    selectedNode: (state, action) => {
      state.editForm.name.value = action.payload.name;
      state.editForm.IP.value = action.payload.IP;
      state.editForm.port.value = action.payload.port;

      state.editForm.name.isValid = true;
      state.editForm.IP.isValid = true;
      state.editForm.port.isValid = true;
    },
    changeInput: (state, action) => {
      state.editForm[action.payload.targetName].value = action.payload.value;
      state.editForm[action.payload.targetName].isValid = checkValidity(
        action.payload.value,
        state.pattern[action.payload.targetName]
      );
    },
    changeModalInput: (state, action) => {
      state.addForm[action.payload.targetName].value = action.payload.value;
      state.addForm[action.payload.targetName].isValid = checkValidity(
        action.payload.value,
        state.pattern[action.payload.targetName]
      );
    },
    resetModalInput: (state) => {
      state.addForm.name.value = "";
      state.addForm.IP.value = "";
      state.addForm.port.value = "";
    },
  },
});

export const {
  selectedNode,
  changeInput,
  changeModalInput,
  resetModalInput,
} = formSlice.actions;

export default formSlice.reducer;
