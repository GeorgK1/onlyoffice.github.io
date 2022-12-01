((window, undefined) => {
    window.Asc.plugin.init = () => {
        console.log('I run');
        // const oDocument = Api.GetDocument();
        // const allForms = oDocument.getAllForms();
        // console.log(allForms);

        window.Asc.plugin.executeMethod('GetAllForms');

        window.Asc.plugin.onMethodReturn = (data) => {
            if (data) {
                for (const id of data) {
                    console.log(id);
                    window.Asc.plugin.executeMethod('GetFormValue', id);
                }
            }
        };

        window.Asc.plugin.onMethodReturn = (data) => {
            console.log('Hopefully this contains form values');
        };
    };
})(window, undefined);
