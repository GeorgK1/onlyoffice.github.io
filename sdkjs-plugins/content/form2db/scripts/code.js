((window, undefined) => {
    window.Asc.plugin.init = () => {
        console.log('I run');
        const allForms = window.Asc.plugin.onMethodReturn = () => {
            window.Asc.plugin.executeMethod('GetAllForms');


            console.log("Running from onmethodreturn", window.Asc.plugin.info)
        }
        console.log(JSON.stringify(allForms));
    };
})(window, undefined);
