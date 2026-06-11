import { EventCallbackType, ScrollingTextEventMap, EventNameType } from "./types";



class Event {
    private _event: {
        _eventName: EventNameType;
        _callback: EventCallbackType<any>;
    }[];

    constructor() {
        this._event = []
    }
    /**
     * @description: Register event listener
     * @param eventName Event name 'change', 'reachEnd', 'start', 'stop', 'pause'
     * @param callback Callback function
     */
    on<K extends EventNameType>(_eventName: K, _callback: EventCallbackType<K>) {
        this._event.push({ _eventName, _callback })
    }

    /**
     * @description: Emit event
     * @param eventName Event name 'change', 'reachEnd', 'start', 'stop', 'pause'
     * @param data Data to be passed to the callback
     */
    protected _emit<K extends EventNameType>(eventName: K, ...data: ScrollingTextEventMap[K]) {
        this._event.forEach((event) => {
            if (event._eventName === eventName) {
                event._callback(...data)
            }
        })
    }

    /**
     * @description: Unregister event listener
     * @param eventName Event name 'change', 'reachEnd', 'start', 'stop', 'pause'
     * @param callback Callback function
     */
    off<K extends EventNameType>(eventName: K, callback: EventCallbackType<K>) {
        this._event = this._event.filter((event) => {
            return event._eventName !== eventName && event._callback !== callback
        })
    }
}


export enum EventType {
    change = "change",
    reachEnd = "reachEnd",
    start = "start",
    stop = "stop",
    pause = "pause",
}

export default Event