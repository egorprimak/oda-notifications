class Notify {
    constructor(userId, cid, oid, email, subject, message, isRead, creationDate, firstLoad = true) {
        this.userId = userId || '';
        this.cid = cid;
        this.oid = oid;
        this.email = email || '';
        this.subject = subject || '';
        this.message = message || '';
        this.isRead = isRead === 'True';
        this.creationDate = creationDate || '';
        this.needAnimation = !this.isRead && !firstLoad;
    }

    static create(userId, cid, oid, email, subject, message, isRead, creationDate, firstLoad) {
        return new Notify(userId, cid, oid, email, subject, message, isRead, creationDate, firstLoad);
    }

    static toDto(notify) {
        return {
            userId: notify.userId || '',
            cid: notify.cid,
            oid: notify.oid,
            email: notify.email || '',
            subject: notify.subject || '',
            message: notify.message || '',
            isRead: notify.isRead ? 'True' : 'False',
        };
    }
}

// element PACK {
//     for $a in PACK/OBJECT
//     order by $a/@email, $a/@date descending   
//     return element OBJECT {
//         $a/@*, $a/*
//     }
// }