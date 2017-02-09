/**
 * Created by Vlad on 2/5/2017.
 */
module.exports = function(Inventory) {

    Inventory.observe('access', function(ctx, next) {

        const token = ctx.options && ctx.options.accessToken;
        console.log('access '+ token);
        const userId = token && token.userId;
        const user = userId ? 'user#' + userId : '<anonymous>';

        const modelName = ctx.Model.modelName;
        const scope = ctx.where ? JSON.stringify(ctx.where) : '<all records>';
        console.log('%s: %s accessed %s:%s', new Date(), user, modelName, scope);
        next();
    });


    Inventory.log = function(messageId, options) {
console.log(arguments);
      /*  const Message = this.app.models.Message;
        // IMPORTANT: forward the options arg
        return Message.findById(messageId, options)
                .then(msg => {
                const token = options && options.accessToken;
        const userId = token && token.userId;
        const user = userId ? 'user#' + userId : '<anonymous>';
        console.log('(%s) %s', user, msg.text));
        });*/
    }
};
