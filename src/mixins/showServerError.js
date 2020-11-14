export default {
    methods: {
        showServerError(data) {
            //если строка
            if(typeof data === "string") {
                data = [{error: data}];
            }

            //если массив
            let vMsgNodes = [];
            data.forEach((item) => {
                for(let key in item) {
                    vMsgNodes.push(this.$createElement(
                        'p',
                        { class: ['mb-1'] },
                        [
                            item[key]
                        ]
                    ));
                }

                this.$bvToast.toast(vMsgNodes, {
                    title: "Ошибка",
                    variant: "danger",
                    toaster: "b-toaster-top-center",
                    solid: true,
                })
            });
        }
    }
}