((window, undefined) => {
    window.Asc.plugin.init = () => {
        console.log('I run');
        window.Asc.plugin.onMethodReturn = () => {
            window.Asc.plugin.executeMethod('GetAllForms');

            console.log('Running from onmethodreturn', window.Asc.plugin.info);
        };
    };
})(window, undefined);
