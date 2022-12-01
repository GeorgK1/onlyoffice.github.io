((window, undefined) => {
    window.Asc.plugin.init = () => {
        const ids = [];

        window.Asc.plugin.executeMethod('GetAllForms');

        window.Asc.plugin.onMethodReturn = (data) => {
            if (data) {
                for (const id of data) {
                    ids.push(id);
                    window.Asc.plugin.executeMethod(
                        'GetFormValue',
                        id,
                        (data) => console.log('I run here', data)
                    );
                }
            }
        };
    };
})(window, undefined);
