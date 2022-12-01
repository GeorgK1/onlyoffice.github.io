((window, undefined) => {
    window.Asc.plugin.init = () => {
        const ids = [];

        window.Asc.plugin.executeMethod('GetAllForms');

        window.Asc.plugin.onMethodReturn = (data) => {
            print(data);
            if (data) {
                for (const id of data) {
                    ids.push(id);
                    console.log(id)
                    window.Asc.plugin.executeMethod('GetFormValue', id);
                }
            }
        };
    };
})(window, undefined);
