export const state = () => ({
    key: 'val',
});

export const mutations = {
    fn(state,value) {
        state.key = value;
    },
};

