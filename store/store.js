export const state = () => ({
  currentRadioBtn: true,
});

export const mutations = {
  // функция меняет состояние в зависимости от велъю передаваемого из VRadioGroup
  checkedState(state, value) {
    if (value === "Entepreneur") {
      state.currentRadioBtn = false;
    } else if (value === "Legal entity") {
      state.currentRadioBtn = true;
    }
  },
};
