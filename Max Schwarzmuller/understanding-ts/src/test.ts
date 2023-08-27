enum orderStatus {
    Prepared = 'Przygotowane',
    Sent = 'Wysłane',
    Accepted = 'Akceptowane'
}

const what = () => {
    let status = orderStatus.Prepared;
    let status2 = orderStatus.Sent;

    if (status === orderStatus.Prepared) {
        console.log(status);
    }

    if (orderStatus.Sent === status2) {
        console.log('ok');
    }

    if(2+2+4 === 8) {
        status = orderStatus.Accepted;
    }

    console.log(status);
}


what()