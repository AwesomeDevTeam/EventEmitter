import Callback from "./Callback";

/**
 * EventEmitter
 */
export default function EventEmitter() {

    const callbacks = new Map();

    const ret = Object.create(EventEmitter.prototype,{

        /**
         * Register callback function.<br />
         * Event object will be passed to registered callback function as first argument.
         * @name EventEmitter#on
         * @memberof EventEmitter
         * @function
         * @param {String} evtName Event name
         * @param {Function} cbf Callback function
         * @param {Object} [context=EventEmitter] Callback execution context (this)
         */
        on : { value :  (evtName, cbf, context) => {

            const ctx = context||this;

            const cb = Callback(evtName,cbf,ctx);

            if ( callbacks.has(evtName) ) {
                callbacks.get(evtName).push(cb);
            } else {
                callbacks.set(evtName, [cb]);
            }

        }},

        /**
         * Execute callbacks on given event if callbacks exist for this event (emit events).
         * @protected
         * @param {String} evtName Event name
         * @param {Object} evt Associated source event
         */
        emit : { value : emit }

    });


    function emit(evtName, evt) {

        if ( callbacks.has(evtName) ) {

            callbacks.get(evtName).forEach( cb => cb.callback.call(cb.context, evt) );

        }

    }

    return ret;

}
