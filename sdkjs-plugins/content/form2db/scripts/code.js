((window, undefined) => {
    window.Asc.plugin.init = () => {
        const ids = [];

        window.Asc.plugin.executeMethod('GetAllForms');

        window.Asc.plugin.onMethodReturn = (data) => {
            console.log(data);
            if (data) {
                for (const id of data) {
                    ids.push(id.InternalId);
                    console.log(id.InternalId)
                    window.Asc.plugin.executeMethod('GetFormValue', id.InternalId, (value) => console.log("value is ", value));
                }
            }
        };
    };
})(window, undefined);
