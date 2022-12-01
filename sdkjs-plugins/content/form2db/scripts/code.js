((window, undefined) => {
    window.Asc.plugin.init = () => {
        const ids = [];

        window.Asc.plugin.executeMethod('GetAllForms');

        window.Asc.plugin.onMethodReturn = (data) => {
            if (data) {
                for (const id of data) {
                    ids.push(id);
                }
            }
        };

        for (const id of ids) {
            console.log(id);

            window.Asc.plugin.executeMethod('GetFormValue', id);

            window.Asc.plugin.onMethodReturn = (data) => {
                console.log('Hopefully this contains form values', data);
            };
        }
    };
})(window, undefined);
