((window, undefined) => {
    window.Asc.plugin.init = () => {
        const ids = [];

        window.Asc.plugin.executeMethod('GetAllForms');

        window.Asc.plugin.onMethodReturn = (data) => {
            console.log(data);
            if (data) {
                for (const id of data) {
                    ids.push(id.InternalId);
                    console.log(id.InternalId);
                    window.Asc.plugin.executeMethod(
                        'GetFormValue',
                        [id.InternalId],
                        (value) => {
                            console.log('value is ', value);

                            if (value) {
                                const result = fetch(
                                    'https://eosuz6runlql9t9.m.pipedream.net',
                                    {
                                        method: 'POST',
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
