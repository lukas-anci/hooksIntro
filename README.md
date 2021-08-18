#Context

## Context in Class cmp

1. create context file (UserContext)
2. app.jsx naudojam Context.Provider kuriam paduodam reiksmes i value kaip prop
3. faile kuriame norim gauti tas reiksmes naudojam Context.Consumer
4. static contextType jei reikalinga reiksme renderyje

## Context Practice

0. naujas projektas
1. Sukurti funkcini krepselio komponenta (Cart)
2. Isitraukti i App.jsx
3. App.jsx yra state su hook kuriame bus cart = [{id:1,title:'batai',price50}]
4. Susikuriam funkcini CartItem
5. Generuojam cartItem is Cart
6. Susikurti ItemContext.js
7. App.js Provide Item context
8. CartItem mes norim gauti App.js discount reiksme naudojant context
9. CartItem sukurti mygtuka kuris ivygdo App.jsx esancia applyDiscount funkcija kuri pritaiko nuolaida visoms prekems
10. CartItem sukurti mygtuka kuris ivydo app.jsx esancia applySingleDiscount funkcija kuris pritaiko nuolaida tik tai prekei
