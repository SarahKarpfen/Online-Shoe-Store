//header:
//CountItems: הצבת מספר הפריטים שבסל הקניות על-יד אייקון סל הקניות
let countItems=localStorage.getItem('numItemsInBag'); //שליפת מספר הפריטים שבסל הקניות מהלוקל סטורז ושמירתו במשתנה
let countItemsPosition=document.getElementById('CountItems'); //שמירת מיקום ההצבה במשתנה
countItemsPosition.innerHTML=countItems; //הצבת במיקום המתאים: על-יד אייקון סל-הקניות

//UserName: הצבת שם המשתמש על-יד אייקון היוזר
let uzerName=localStorage.getItem("FullName"); //שליפת שם המשתמש מהלוקל סטורז ושמירתו במשתנה
let userNamePosition=document.getElementById('UserName'); //שמירת מיקום ההצבה במשתנה
userNamePosition.innerHTML=uzerName; //הצבת במיקום המתאים: על-יד אייקון היוזר


//----------------------------------------------------------------------------------------------------

//הצגת צמונות הנעליים המוצעות למכירה:
//הגדרת מערכים:
//מערך תמונות הנעליים:
let shoesPictures=['../Pictures/נעליים/1.webp', 
                   '../Pictures/נעליים/2.webp',
                   '../Pictures/נעליים/3.webp',
                   '../Pictures/נעליים/4.webp', 
                   '../Pictures/נעליים/5.webp', 
                   '../Pictures/נעליים/6.webp',
                   '../Pictures/נעליים/7.webp', 
                   '../Pictures/נעליים/8.webp', 
                   '../Pictures/נעליים/9.webp',
                   '../Pictures/נעליים/10.webp', 
                   '../Pictures/נעליים/11.webp', 
                   '../Pictures/נעליים/12.webp'];


//מערך דגמי הנעליים:
let shoesModel=["Astila","Frann","Meadow","Madi","Quarta","Woolly","Blige","Brunette","Loucette","Marie","Stessy","Tirarith"];

//מערך קטגוריות הנעליים:
let shoesCategory=["ספורט","ספורט-אלגנט","ספורט","ספורט-אלגנט","ספורט","ספורט","אלגנט-עקב גבוה","אלגנט-עקב בינוני","אלגנט-עקב גבוה","אלגנט-עקב גבוה","אלגנט-עקב גבוה","אלגנט-עקב גבוה"];

//מערך מחירי הנעליים:
let shoesPrice=[120,210,110,350,300,450,480,230,450,180,120,400];

//מערך חומרי הנעליים:
let shoesMaterial=["עור","סינטטי","סינטטי","סינטטי","סינטטי","עור","עור","סינטטי","עור","סינטטי-פלסטיק","סינטטי","סינטטי"]

//מערך גובה עקבי הנעליים:
let shoesHigh=["שטוח","שטוח","3.8 סנטימטר","3.8 סנטימטר","שטוח","שטוח","10 סנטימטר","7.5 סנטימטר","9.5 סנטימטר","11 סנטימטר","11 סנטימטר","9.5 סנטימטר"]

//מערך צבעי הנעליים:
let shoesColor=["וורוד","וורוד-אפור-בז'","וורוד בהיר","לבן-צבעוני","וורוד בהיר","לבן","שחור","זהב-וורוד","אפור","וורוד","וורוד","חלודה"]


//ריצה על מערך תמונות הנעליים, יצירה והצגה של הנעליים על המסך:
for(let i=0; i<shoesPictures.length; i++) //מעבר על מערך תמונות הנעליים הנ"ל
{
    //עבור כל נעל:
    //יצירת דיו שיכיל את תמונת הנעל וכפתור:
    let allItem=document.createElement('div'); //יצירת דיו
    allItem.className="AllItem"; //הגדרת קלאס לדיו שיצרתי-לצורך ערכי העיצוב
    
    //הכנסת הדיו למיקום המיועד על המסך:
    let allItemPosition=document.getElementById('Shop');//שמירה במשתנה את מיקום הצבת הדיו על המסך
    allItemPosition.appendChild(allItem);

    //יצירת תמונת הנעל:
    let item=document.createElement('img') //יצירת תגית תמונה
    item.src=shoesPictures[i]; //שמירת התמונה שבמיקום הנוכחי במערך התמונות, בתוך תגית התמונה שיצרתי
    item.className="Item"; //הגדרת קלאס לתמונה שיצרתי-לצורך ערכי העיצוב

    //הכנסת התמונה למיקום המיועד על המסך:
    allItem.appendChild(item); //הצבת התמונה במיקום המתאים והצגתה על המסך

    
    //יצירת כפתור "הוסף לסל":
    let addToBag=document.createElement('button'); //יצירת כפתור
    addToBag.textContent="הוספה לסל"; //הגדרת טקסט הכפתור
    addToBag.className="AddToBag"; //הגדרת קלאס לכפתור שיצרתי-לצורך ערכי העיצוב


    //הצבת הכפתור במיקום המיועד על תמונות הפריטים:
    allItem.appendChild(addToBag); //הצבת הכפתור במיקום המתאים

    //הוספת אירוע לחיצה על הכפתור:
    //כשהמשתמש ילחץ על הכפתור, תופעל פונקציה שתעביר את המשתמש לדף הנעל הרצויה ותשמור את פרטי הנעל בסשן
    addToBag.addEventListener('click', changePageAndSaveDetails.bind(null, i));
}



//פונקציה המקבלת את אינדקס המערך של הנעל שעליה המשתמש לחץ.
//הפונקציה מבצעת:
//1.שמירת כל נתוני הנעל בסשן-על מנת להציב בדף הנעל הרצויה
//2.העברת המשתמש לדף הנעל הרצויה
function changePageAndSaveDetails(detailsIndex)
{
    //יצירת אובייקט שיכיל את נתוני הנעל
    // הפונקציה תשלוף את נתוני הנעל ממערכי הנתונים במקום האינדקס שהתקבל בכותרת הפונקציה
    let shoesObject=
    {
        Picture: shoesPictures[detailsIndex],
        Model: shoesModel[detailsIndex],
        Category: shoesCategory[detailsIndex],
        Price: shoesPrice[detailsIndex],
        Material: shoesMaterial[detailsIndex],
        High: shoesHigh[detailsIndex],
        Color: shoesColor[detailsIndex]
    }

    //שמירת האובייקט בסשן-על יידי הפעולה:
    //sessionStorage.setItem(ערך המפתח, מפתח)
    sessionStorage.setItem('shoesDetails', JSON.stringify(shoesObject));
    //כיון שהסשן מזהה רק סטרינגים, ולא אובייקטים-נמיר את ערך המפתח לסטרינג-על-ידיי הקוד הבא:
    //JSON.stringify(shoesObject)

    //העברת המשתמש לדף הנעל הרצויה
    window.location="../Details item  window/Details item window.html";
}





