class DateFormatter {
    _dateTimeObject = { date: '', time: '' };

    constructor(date) {
        this.date = date;
    }

    getDateTimeObject() {}

    _prepareDate() {}

    _prepareTime() {}
}

class ISODateFormatter extends DateFormatter {
    constructor(date) {
        super(date);
    }

    getDateTimeObject() {
        if (!this.date) {
            return this._dateTimeObject;
        }

        const dateArr = this.date.split('T');
        const date = dateArr[0];
        const time = dateArr?.[1] || '';
        let dateTime = new Date(date + 'T' + time);
        this._prepareDate(dateTime);

        if (time) {
            this._prepareTime(dateTime);
        }

        return this._dateTimeObject;
    }

    _prepareDate(dateTime) {
        this._dateTimeObject.date = dateTime.toLocaleDateString();
    }

    _prepareTime(dateTime) {
        this._dateTimeObject.time = dateTime.toLocaleTimeString();
    }
}