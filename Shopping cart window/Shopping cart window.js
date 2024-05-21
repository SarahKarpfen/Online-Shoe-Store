//header:
//CountItems: הצבת מספר הפריטים שבסל הקניות על-יד אייקון סל הקניות
let countItems=localStorage.getItem('numItemsInBag'); //שליפת מספר הפריטים שבסל הקניות מהלוקל סטורז ושמירתו במשתנה
let countItemsPosition=document.getElementById('CountItems'); //שמירת מיקום ההצבה במשתנה
countItemsPosition.innerHTML=countItems; //הצבת במיקום המתאים: על-יד אייקון סל-הקניות

//UserName: הצבת שם המשתמש על-יד אייקון היוזר
let uzerName=localStorage.getItem("FullName"); //שליפת שם המשתמש מהלוקל סטורז ושמירתו במשתנה
let userNamePosition=document.getElementById('UserName'); //שמירת מיקום ההצבה במשתנה
userNamePosition.innerHTML=uzerName; //הצבת במיקום המתאים: על-יד אייקון היוזר


// ---------------------------------------------------------------------------------------------------------
//עבור כל משתמש-שמירה בלוקלסטורז סכום כולל של כל המוצרים שלו בסל הקניות. הסכום מאותחל ל-0 בתחילה:
localStorage.setItem('FinalPrice', 0);

// פונקציה המטפלת בתצוגת נתוני הקניות בסל הקניות 
let displayShops=()=>
{
    //מעבר על מערך המפתחות שבלוקל סטורז-לצורך הצגת המוצרים שנכנסו לסל הקניות
    let shopsKeysArr=localStorage.getItem('ShopsKeysArr'); //לצורך מעבר על מערך המפתחות-שליפת המערך מהלוקל סטורז ושמירתו במשתנה
    shopsKeysArr=JSON.parse(shopsKeysArr); // בקוד הנ"ל בוצעה המרה של הקניה ששלפנו מהלוקל סטורז-מסטרינג-האופן בו הוא מוצג בלוקל סטורז-לאובייקט(-ג'ייסון) 

    //מעבר על מערך המפתחות:
    for(let i=0; i<shopsKeysArr.length; i++)
    {
        //שמירה במשתנה את ערך המפתח המופיע במקום הנוכחי במערך
        let keyName=shopsKeysArr[i];

        //שליפת אובייקט הקניה שערך המפתח שלו שווה לערך המפתח הנוכחי במערך המפתחות, ושמירתו במשתנה
        let thisShop=localStorage.getItem(keyName);
        thisShop=JSON.parse(thisShop); // בקוד הנ"ל בוצעה המרה של הקניה ששלפנו מהלוקל סטורז-מסטרינג-האופן בו הוא מוצג בלוקל סטורז-לאובייקט(-ג'ייסון)
        

        //תצוגת המוצר ששלפנו מהלוקל סטורז':
        let shoppingList=document.getElementById('ShoppingList'); //שמירה במשתנה את מיקום הצבת המוצר שנכנס לסל הקניות 
        
        //יצירת דיוו ראשי-לתצוגת פרטי המוצר
        let display=document.createElement('div'); //יצירת דיוו שיכיל את פרטי המוצר
        display.className="Display"; //הגדרת קלאס לדיו שיצרתי-לצורך ערכי העיצוב
        shoppingList.appendChild(display); //הצבה והצגת המוצר שיצרתי במיקום המיועד




        //תת-דיוו ראשון-עבור תמונת המוצר:
        let pictureLocation=document.createElement('div'); //יצירת דיו שיכיל את תמונת המוצר
        pictureLocation.className="PictureLocation";//הגדרת קלאס לדיו שיצרתי-לצורך ערכי העיצוב
        display.appendChild(pictureLocation); //הצבה והצגת דיוו התמונה שיצרתי במיקום המיועד

        //יצירת תגית תמונה עבור תמונת הנעל
        let picture=document.createElement('img'); //יצירת תגית התמונה עבור תמונת הנעל שהוספה לסל הקניות
        picture.src=thisShop.Picture; //שמירת התמונה של המוצר הנוכחי במשתנה
        picture.className="ShoePicture"; //הגדרת קלאס לתמונה שיצרתי-לצורך ערכי העיצוב
        pictureLocation.appendChild(picture); //הצבת התמונה בדיוו התמונה


        

        //יצירת תת-דיוו שני-עבור פרטי המוצר:
        let detailsLocation=document.createElement('div'); //יצירת דיו שיכיל את פרטי המוצר
        detailsLocation.className="DetailsLocation";//הגדרת קלאס לדיו שיצרתי-לצורך ערכי העיצוב
        display.appendChild(detailsLocation); //הצבה והצגת דיוו הפרטים שיצרתי במיקום המיועד

        //יצירת פסקאות לפרטי המוצר והצבתם בדיוו פרטי המוצר:
        //פסקה עבור מודל הנעל
        let model=document.createElement('p')//יצירת פסקה עבור הפרט
        model.className="Title"; //הגדרת קלאס לפסקה-לצורך ערכי העיצוב
        model.textContent=thisShop.Model; //הצבת הערך בפסקה
        detailsLocation.appendChild(model); //הצבה והצגת הפסקה בדיוו פרטי המוצר

        //פסקה עבור צבע הנעל
        let color=document.createElement('p')//יצירת פסקה עבור הפרט
        color.className="Detail"; //הגדרת קלאס לפסקה-לצורך ערכי העיצוב
        color.textContent="צבע: "+thisShop.Color; //הצבת הערך בפסקה
        detailsLocation.appendChild(color); //הצבה והצגת הפסקה בדיוו פרטי המוצר

        //פסקה עבור מידת הנעל
        let size=document.createElement('p')//יצירת פסקה עבור הפרט
        size.className="Detail"; //הגדרת קלאס לפסקה-לצורך ערכי העיצוב
        size.textContent="מידה: "+thisShop.Size; //הצבת הערך בפסקה
        detailsLocation.appendChild(size); //הצבה והצגת הפסקה בדיוו פרטי המוצר


         //כמות נעליים
         //פסקה עבור כמות הנעליים
         let amount=document.createElement('lable')//יצירת לייבל עבור הפרט, ולא פסקה-ע"מ למנוע מעבר שורה
         amount.className="Detail"; //הגדרת קלאס ללייבל-לצורך ערכי העיצוב
         amount.textContent="כמות: "//הצבת הערך בפסקה
         detailsLocation.appendChild(amount); //הצבה והצגת הלייבל בדיוו פרטי המוצר

         //הוספת אינפוט נמבר המאותחל לכמות שנבחרה כבר
         let numberInput=document.createElement('input') //יצירת אינפוט
         numberInput.type='number'; //הגדרת סוגו של האינפוט לנמבר
         numberInput.value=thisShop.Amount; //הצבת הכמות שכבר נבחרה-כערך ברירת המחדל של האינפוט
         numberInput.min="1"; //הגדרת ערכו המינימלי של האינפוט להיות 1
         numberInput.style.width='17%'; //הגדרת אורכו של האינפוט
         numberInput.value=thisShop.Amont; //הצבת כמות הפריטים שכבר נבחרה כערך התחלתי באינפוט
        //  numberInput.addEventListener('input', changeAmount())
         detailsLocation.appendChild(numberInput); //הצבה והצגת האינפוט בדיוו פרטי המוצר-על יד הכמות


         //פסקה עבור מחיר הנעל-משוכלל בהתאם לכמות הפריטים שנבחרו
         let price=document.createElement('p')//יצירת פסקה עבור הפרט
         price.className="Price"; //הגדרת קלאס לפסקה-לצורך ערכי העיצוב
         price.textContent="מחיר: "+thisShop.FinalPrice; //הצבת הערך בפסקה
         detailsLocation.appendChild(price); //הצבה והצגת הפסקה בדיוו פרטי המוצר



         //יצירת תגית תמונה עבור אייקון הפח
         let garbageIcon=document.createElement('img'); //יצירת תגית תמונה עבור האייקון
         garbageIcon.src="../Icons/recycle-bin.png"; //הצבת תמונת האייקון
         garbageIcon.className="GarbageIcon"; //הגדרת קלאס לאיקון-לצורך ערכי העיצוב
         garbageIcon.addEventListener ('click', updateAmountAndFinalPrice.bind(null, i)); //הוספת אירוע לחיצה על אייקון הפח 
         display.appendChild(garbageIcon); //הצבת והצגת תמונת האייקון במיקום המתאים



         //עדכון המחיר הסופי של כל המוצרים בסל הקניות:-המופיע בתחתית רשימת המוצרים
         let finalPrice=localStorage.getItem('FinalPrice');//שליפת מחיר כל המוצרים שבסל הקניות מהלוקל סטורז ושמירתו במשתנה
         finalPrice=parseInt(finalPrice); //המרת המחיר הסופי מסטרינג-בו הם מופיעים בלוקל סטורז לאינט-מספר-לצורך הפחתת מספר הפריטים של המוצר העומד להימחק
         finalPrice+=thisShop.FinalPrice; //הוספת מחיר הפריט של המוצר שנוסף לסל הקניות

         let finalPricePosition=document.getElementById('FinalPrice'); //שמירת מיקום ההצבה במשתנה
         finalPricePosition.innerHTML="סך-הכל לתשלום: "+finalPrice; //הצבת במיקום המתאים: על-יד אייקון סל-הקניות

         localStorage.setItem('FinalPrice', finalPrice); //עדכון המחיר הסופי בלוקל סטורז
        
         
         //עדכון מספר הפריטים שבסל הקניות:-המופיע בתחתית רשימת המוצרים
         let numItemsInBag=localStorage.getItem('numItemsInBag');//שליפת מספר הפריטים הכללית מהלוקל סטורז ושמירתו במשתנה

         //הצבה והצגת מספר הפריטים החדש במיקום המתאים-מתחת לרשימת הפריטים
         let countItemsPosition=document.getElementById('FinalNumItems'); //שמירת מיקום ההצבה במשתנה
         countItemsPosition.innerHTML="מספר פריטים בסל: "+numItemsInBag; //הצבת במיקום המתאים: על-יד אייקון סל-הקניות


        }
        if(shopsKeysArr.length==0)
        {
            let finalPricePosition=document.getElementById('FinalPrice'); //שמירת מיקום ההצבה במשתנה

            finalPricePosition.innerHTML="סך-הכל לתשלום: 0";
        }

};


displayShops(); //זימון הפונקציה המטפלת בתצוגת נתוני הקניות בסל הקניות




// -------------------------------------------------------------------------------------------------------------------------------------------


//פונקציה המקבלת את אינדקס במערך המפתחות של אובייקט המוצר אותו רוצים למחוק, ומטפלת בלחיצה על אייקון הפח. הפונקציה צבצע את הפעולות הבאות:
//1. תעדכן את מספר הפריטים שבסל הקניות-ע"י הפחתת מספר הפריטים נבחרו למוצר שרוצים למחוק.
//2. תעדכן את המחיר הסופי-של כל המוצרים שבסל הקניות-על-יידי הפחתת מחיר המוצר אותו רוצים למחוק.
//3. תמחק את המוצר.
//4. תעדכן את התצוגה.
function updateAmountAndFinalPrice(Index)
{
    let shopsKeysArr=localStorage.getItem('ShopsKeysArr'); //שליפת המערך מהלוקל סטורז ושמירתו במשתנה
    shopsKeysArr=JSON.parse(shopsKeysArr); // בקוד הנ"ל בוצעה המרה של הקניה ששלפנו מהלוקל סטורז-מסטרינג-האופן בו הוא מוצג בלוקל סטורז-לאובייקט(-ג'ייסון) 

     //שמירה במשתנה את ערך המפתח המופיע במקום הנוכחי במערך
    let keyName=shopsKeysArr[Index];

    //שליפת אובייקט הקניה שערך המפתח שלו שווה לערך המפתח הנוכחי במערך המפתחות, ושמירתו במשתנה
    let deletObject=localStorage.getItem(keyName);
    deletObject=JSON.parse(deletObject); // בקוד הנ"ל בוצעה המרה של הקניה ששלפנו מהלוקל סטורז-מסטרינג-האופן בו הוא מוצג בלוקל סטורז-לאובייקט(-ג'ייסון)
    

   //פעולה מספר 1: 
   let numItemsInBag=localStorage.getItem('numItemsInBag');//שליפת מספר הפריטים הכללית מהלוקל סטורז ושמירתו במשתנה
   numItemsInBag=parseInt(numItemsInBag); //המרת מספר הפריטים מסטרינג-בו הם מופיעים בלוקל סטורז לאינט-מספר-לצורך הפחתת מספר הפריטים של המוצר העומד להימחק
   numItemsInBag=numItemsInBag-deletObject.Amont; //הפחתת מספר הפריטים של המוצר העומד להימחק

   //הצבה והצגת מספר הפריטים החדש במיקום המתאים-על-יד אייקון סל הקניות
   let countItemsPosition=document.getElementById('CountItems'); //שמירת מיקום ההצבה במשתנה
   countItemsPosition.innerHTML=numItemsInBag; //הצבת במיקום המתאים: על-יד אייקון סל-הקניות

   //הצבה והצגת מספר הפריטים שבסל הקניות מתחת לרשימת הפריטים
   let finelNumItemsLocation=document.getElementById('FinalNumItems'); //שמירת מיקום ההצבה במשתנה
   finelNumItemsLocation.innerHTML="מספר פריטים בסל: "+numItemsInBag; //הצבת במיקום המתאים-מתחת רשימת הפריטים

   localStorage.setItem('numItemsInBag', numItemsInBag); //עדכון מספר הפריטים בלוקל סטורז


   //פעולה מספר 2:
   let finalPrice=localStorage.getItem('FinalPrice');//שליפת מחיר כל המוצרים שבסל הקניות מהלוקל סטורז ושמירתו במשתנה
   finalPrice=parseInt(finalPrice); //המרת המחיר הסופי מסטרינג-בו הם מופיעים בלוקל סטורז לאינט-מספר-לצורך הפחתת מספר הפריטים של המוצר העומד להימחק
   finalPrice-=deletObject.FinalPrice; //הפחתת מחיר הפריט של המוצר העומד להימחק

   localStorage.setItem('FinalPrice', 0); // עדכון המחיר הסופי בלוקל סטורז להיות 0-עבור הטעינה של התצוגה


   //פעולה מספר 3:
   shopsKeysArr.splice(Index, 1); //מחיקת המוצר אותו רוצים למחוק מהמערך
   localStorage.setItem('ShopsKeysArr', JSON.stringify(shopsKeysArr)); //שמירת המערך המעודכן חזרה בלוקל סטורז   
  
  
   //פעולה מספר 4:
   let shoppingList=document.getElementById('ShoppingList'); //שמירה במשתנה את סל הקניות 
   shoppingList.innerHTML="";  //מחיקת המוצרים שבסל הקניות

   displayShops(); //טעינה מחדש של הדף. על-יידי כך-יוצגו המוצרים הקיימים בסל הקניות, לאחר המחיקה
}


// -----------------------------------------------------------------------------------------------------------------------

//פונקציה המופעלת בעת לחיצה על הכפתור "מעבר לתשלום". הפונקציה תשנה את טקסט הכפתור
function changeText()
{
    let button=document.getElementById('ForPay'); //שליפת הכפתור ושמירתו במשתנה
    button.textContent="!שולם בהצלחה"; //שינוי טקסט הכפתור
}


