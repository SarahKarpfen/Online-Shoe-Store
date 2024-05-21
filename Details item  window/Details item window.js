//header:
//CountItems: הצבת מספר הפריטים שבסל הקניות על-יד אייקון סל הקניות
let countItems=localStorage.getItem('numItemsInBag'); //שליפת מספר הפריטים שבסל הקניות מהלוקל סטורז ושמירתו במשתנה
let countItemsPosition=document.getElementById('CountItems'); //שמירת מיקום ההצבה במשתנה
countItemsPosition.innerHTML=countItems; //הצבת במיקום המתאים: על-יד אייקון סל-הקניות

//UserName: הצבת שם המשתמש על-יד אייקון היוזר
let uzerName=localStorage.getItem("FullName"); //שליפת שם המשתמש מהלוקל סטורז ושמירתו במשתנה
let userNamePosition=document.getElementById('UserName'); //שמירת מיקום ההצבה במשתנה
userNamePosition.innerHTML=uzerName; //הצבת במיקום המתאים: על-יד אייקון היוזר


//-----------------------------------------------------------------------------------------------------------------------------

//עדכון פרטי הנעל הנוכחית-על פי האובייקט המכיל את נתוני הנעל בסשן-שנשמר כאשר המשתמש לחץ על הכפתור שעל יד כל תמונת נעל בדף הראשי
//הצבת תמונת הנעל
let picturePosition=document.getElementById('Picture'); //שמירה במשתנה את מיקום ההצבה
let picture=sessionStorage.getItem("shoesDetails"); //שליפת נתוני הנעל הרצויה מהסשן, ושמירתם במשתנה
picture=JSON.parse(picture); //המרת פרטי הנעל הרצויה מסטרינג(-הסוג בו הוא מופיע בסשן)-לאובייקט (ג'ייסון)
picturePosition.src=picture.Picture; //הצבת התמונה של הנעל הנוכחית במיקום המתאים על המסך

//הצבת מודל הנעל
let modelPosition=document.getElementById('Title'); //שמירה במשתנה את מיקום ההצבה
let model=sessionStorage.getItem("shoesDetails"); //שליפת נתוני הנעל הרצויה מהסשן, ושמירתם במשתנה
model=JSON.parse(model); //המרת פרטי הנעל הרצויה מסטרינג(-הסוג בו הוא מופיע בסשן)-לאובייקט (ג'ייסון)
modelPosition.innerHTML=model.Model; //הצבת המודל של הנעל הנוכחית במיקום המתאים על המסך

//הצבת קטגוריית הנעל
let categoryPosition=document.getElementById('Category'); //שמירה במשתנה את מיקום ההצבה
let category=sessionStorage.getItem("shoesDetails"); //שליפת נתוני הנעל הרצויה מהסשן, ושמירתם במשתנה
category=JSON.parse(category); //המרת פרטי הנעל הרצויה מסטרינג(-הסוג בו הוא מופיע בסשן)-לאובייקט (ג'ייסון)
categoryPosition.innerHTML=category.Category; //הצבת הקטגוריה של הנעל הנוכחית במיקום המתאים על המסך

//הצבת מחיר הנעל
let pricePosition=document.getElementById('Price'); //שמירה במשתנה את מיקום ההצבה
let price=sessionStorage.getItem("shoesDetails"); //שליפת נתוני הנעל הרצויה מהסשן, ושמירתם במשתנה
price=JSON.parse(price); //המרת פרטי הנעל הרצויה מסטרינג(-הסוג בו הוא מופיע בסשן)-לאובייקט (ג'ייסון)
pricePosition.innerHTML=price.Price; //הצבת המחיר של הנעל הנוכחית במיקום המתאים על המסך

//הצבת חומר הנעל
let materialPosition=document.getElementById('Material'); //שמירה במשתנה את מיקום ההצבה
let material=sessionStorage.getItem("shoesDetails"); //שליפת נתוני הנעל הרצויה מהסשן, ושמירתם במשתנה
material=JSON.parse(material); //המרת פרטי הנעל הרצויה מסטרינג(-הסוג בו הוא מופיע בסשן)-לאובייקט (ג'ייסון)
materialPosition.innerHTML=material.Material; //הצבת החומר של הנעל הנוכחית במיקום המתאים על המסך

//הצבת גובה עקב הנעל
let highPosition=document.getElementById('High'); //שמירה במשתנה את מיקום ההצבה
let high=sessionStorage.getItem("shoesDetails"); //שליפת נתוני הנעל הרצויה מהסשן, ושמירתם במשתנה
high=JSON.parse(high); //המרת פרטי הנעל הרצויה מסטרינג(-הסוג בו הוא מופיע בסשן)-לאובייקט (ג'ייסון)
highPosition.innerHTML=high.High; //הצבת גובה העקב של הנעל הנוכחית במיקום המתאים על המסך

//הצבת צבע הנעל
let colorPosition=document.getElementById('Color'); //שמירה במשתנה את מיקום ההצבה
let color=sessionStorage.getItem("shoesDetails"); //שליפת נתוני הנעל הרצויה מהסשן, ושמירתם במשתנה
color=JSON.parse(color); //המרת פרטי הנעל הרצויה מסטרינג(-הסוג בו הוא מופיע בסשן)-לאובייקט (ג'ייסון)
colorPosition.innerHTML=color.Color; //הצבת הצבע של הנעל הנוכחית במיקום המתאים על המסך

 


//----------------------------------------------------------------------------------------------------------------------------------

//לחיצה על הכפתור "הוספה לסל הקניות":

//פונקציה המטפלת בלחיצה על הכפתור "הוספה לסל הקניות". הפונקציה תבצע את הפעולות הבאות:
//1. תשנה את טקסט הכפתור: טקסט: "הפריט נוסף בהצלחה!".
//2. תשנה את עיצוב הכפתור: טקסט-בשחור, רקע-בלבן, מסגרת-בשחור
//3. תוסיף למספר הפריטים הקיימים בסל הקניות את מספר הפריטים שנוספו לסל בלחיצה על הכפתור
//4. תעדכן ותשמור בסטורז' את מספר הפריטים המעודכן שבסל הקניות-לאחר ההוספה הנוכחית
//5. הצבת מספר הפריטים המעודכן על-יד אייקון סל הקניות
//6. יצירת אובייקט של הזמנת הפריט הנוכחי. האובייקט יכלול את הנתונים: תמונה, מודל, צבע, מידה, כמות ומחיר משוכלל לפי הכמות, ותשמור את האובייקט בלוקל סטורז
//7. שמירת מפתח ההזמנה החדשה שהתווספה לסל הקניות-במערך המפתחות שנשלף מהלוקל סטורז'-לצורך הצגתם בסל הקניות.
function addToBagAndUpdateAmount()
{
   //לצורך פעולות 1-3: שמירת הכפתור במשתנה:
   let button=document.getElementById('AddToBag'); //שמירת הכפתור במשתנה
   
   //פעולה מספר 1:
   button.textContent='הפריט נוסף בהצלחה!'; //שינוי טקסט הכפתור


   //פעולה מספר 2:
   button.style.color='black'; //שינוי צבע הטקסט לשחור
   button.style.backgroundColor='white'; //שינוי רקע הטקסט ללבן


   //פעולה מספר 3:
   //שמירה במשתנה את מספר הפריטים שנוספו עד עתה לסל הקניות:
   let countItems=localStorage.getItem('numItemsInBag'); //שמירת מספר הפריטים הקיימים בסל הקניות-על-יידי שליפתם מהלוקל סטורז
   countItems=parseInt(countItems); //המרת מספר הפריטים מסטרינג-בו הם מופיעים בלוקל סטורז לאינט-מספר-לצורך הסכימה

   //שמירה במשתנה את כמות הפריטים הרצויה להוספה לסל הקניות
   let numberInput=document.getElementById('Number'); //הצבה במשתנה את אינפוט הכמות
   let numItems=parseFloat(numberInput.value); //הצבה במשתנה את מספר הפריטים שנבחרו באינפוט
   countItems+=numItems; //סכימת מספר הפריטים
   

   //פעולה מספר 4:
   //עדכון ושמירה בסטורז' מספר הפריטים המעודכן שבסל הקניות
   localStorage.setItem('numItemsInBag', countItems);


   //פעולה מספר 5:
   countItems=localStorage.getItem('numItemsInBag'); // שליפת מספר הפריטים שבסל הקניות מהלוקל סטורז ושמירתו במשתנה שהוגדר בראש העמוד
   countItemsPosition.innerHTML=countItems; //הצבת במיקום המתאים-שהוגדר בראש העמוד: על-יד אייקון סל-הקניות


   //פעולה מספר 6:
   //לצורך יצירת האובייקט:
   //1. שמירת המידה שנבחרה במשתנה-הועתק מצ'ט ג'י-פי-טי...
   // document.getElementById('Size').addEventListener('change', function()
   // {
   //    const size=this.value; //שמירת המידה שנבחרה במשתנה
   // });

   let size=35;
 
   // 2. שכלול המחיר לפי הכמות שנבחרה, ושמירתו בתוך משתנה
   let finalPrice=numItems*price.Price;
   //המשתנים הנ"ל הוגדו במהלך הדף הנ"ל:
   //numItems-מספר הפריטים שנבחרו באינפוט.
   //price-מחיר מוצר אחד.
 
   //יצירת האובייקט: חלק הערכים המוצבים נוצרו במהלך הדף הנ"ל
   let shopObject=
   {
      Picture: picture.Picture,
      Model: model.Model,
      Color: color.Color,
      Size: size,
      Amont: numItems,
      FinalPrice: finalPrice
   }

   //הגדרת משתנה לצורך הגדרת מפתח ייחודי לכל הזמנה
   //שליפת מהלוקל סטורז את המונה המייצג את מספר ההזמנה-ערכו הייחודי של המפתח, שנשמר בלוקל, מאותחל באפס, כאשר נכנס המשתמש לאתר, ושמירתו במשתנה
   let num=localStorage.getItem("KeyForShop"); //שליפת המונה מהלוקל סטורז
   let shopkey="ShopNum"+num; //שמירת שם מפתח ההזמנה הנוכחית

   //שמירת האובייקט בלוקל סטורז
   localStorage.setItem(shopkey, JSON.stringify(shopObject));
   // 2. כיון שהסשן מזהה רק סטרינגים, ולא אובייקטים-נמיר את ערך המפתח לסטרינג-על-ידיי הקוד הבא:
   //JSON.stringify(shopObject)


   //פעולה מספר 7:
   //הגדלת ההמונה שנשלף מהלוקל סטורז-המייצג את מספר ההזמנה ב-1-עבור המפתח לפריט הבא שיוכנס לסל
   num=parseInt(num); //המרת המונה שנשלף מהלוקל סטורז-המייצג את מספר ההזמנה-מסטרינג-בו הוא מופיע בלוקל סטורז לאינט-מספר-לצורך הגדלתו
   num++; //הגדלת המונה ב-1--עבור המפתח לפריט הבא שיוכנס לסל
   localStorage.setItem('KeyForShop', num); //שמירת המונה בלוקל סטורז-כשערכו גדול ב-1

   //הכנסת מפתח הפריט שהוסף כעת לסל למערך המפתחות-לצורך תצוגת כל הפריטים בסל הקניות:
    let shopsKeysArr=localStorage.getItem("ShopsKeysArr"); //שליפת מערך המפתחות מהלוקל סטורז', ושמירתו במשתנה
    shopsKeysArr=JSON.parse(shopsKeysArr); //המרת מערך המפתחות שנשלף מהלוקל סטורז מסטרינג-בו הוא מופיע בלוקל סטורז למסמך(=ג'ייסון)-לצורך הכנסת המפתח החדש של המוצר שהוכנס עתה לסל הקניות-לתוך המערך
    shopsKeysArr.push(shopkey); //הכנסת המפתח החדש לממערך
    localStorage.setItem('ShopsKeysArr', JSON.stringify(shopsKeysArr)); //שמירת המערך המעודכן חזרה בלוקל סטורז   
}
