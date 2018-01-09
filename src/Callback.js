/**
 * Callback
 * @class
 * @private
 * @param {String} evtName Event name
 * @param {Function} callback Callback function
 * @param {Object} context Callback execution context
 * @param {?Object} args Additional arguments
 */
export default function Callback(evtName, callback, context, args){

    return Object.freeze(Object.create(null,{
        evtName : { value : evtName},
        callback : { value : callback},
        context : { value : context},
        args: { value : args}
    }));

}