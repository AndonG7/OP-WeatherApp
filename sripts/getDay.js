function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

export function getDay(dateStr) {
    var day = getDayName(dateStr, "en-GB"); 
    return day;
}