((window, undefined) => {
    window.Asc.plugin.init = () => {

        window.Asc.plugin.executeMethod('GetAllForms');

        window.Asc.plugin.onMethodReturn = (data) => {
            if (data) {
                for (const id of data) {
                    window.Asc.plugin.executeMethod(
                        'GetFormValue',
                        [id.InternalId],
                        (value) => {
                            if (value) {
                                console.log('value is ', value);

                                fetch(
                                    'https://eobq6mnbjz8zqdt.m.pipedream.net',
                                    {
                                        method: 'PUT',
                                        body: JSON.stringify(value),
                                    }
                                ).then((res) => console.log(res.status));
                            }
                        }
                    );
                }
            }
        };
    };
})(window, undefined);
