module.exports = (userId) => {
    // We can put admins in a db soon,
    // but for now we can just shove
    // these user ids in this array

    admins = [
        '317047307839471616',
        '179114344863367169',
        '249982063460089857'
    ];

    admins.forEach(lolok => {
        if (userId == lolok) return true;
    });

    return false;
};