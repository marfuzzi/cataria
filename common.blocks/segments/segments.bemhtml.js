block('segments').replace()(function() {
    return {
        tag: 'script',
        content: {
            html: 'var segments = ' + JSON.stringify(this.ctx.segments.map(segment => {
                console.log('segment.altTrans          ---------------------->', segment.altTrans)
                segment.altTrans = applyCtx(segment.altTrans);

                return segment;
            }))
        }
    };
});
