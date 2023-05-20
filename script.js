let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco => {
    acco.onclick = () => {
        accordion.forEach(remove => remove.classList.remove('active'));
        acco.classList.add('active');
    }
});

/* menu */
var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, z = 0, prod_name = 0, prod_price = 0, totalprod_price = 0, cust_order = [], cust_orderstring = "";
function formSubmit() {
    while (a > 0) {
        var cust_order1 = {
            prod_name: "Nike x CE Windbreaker Jacket",
            prod_price: 3270,
        }
        cust_order.push(cust_order1);
        a--;
    }
    while (b > 0) {
        var cust_order2 = {
            prod_name: "V Neck Sweater Vest with Polo",
            prod_price: 950,
        }
        cust_order.push(cust_order2);
        b--;
    }
    while (c > 0) {
        var cust_order3 = {
            prod_name: "Streetwear Black Cargo Pants",
            prod_price: 790,
        }
        cust_order.push(cust_order3);
        c--;
    }
    while (d > 0) {
        var cust_order4 = {
            prod_name: "Nexus Ripstop Cargo Shorts",
            prod_price: 590,
        }
        cust_order.push(cust_order4);
        d--;
    }
    while (e > 0) {
        var cust_order5 = {
            prod_name: "Air Jordan 1 Retro High Silver Toe",
            prod_price: 16700,
        }
        cust_order.push(cust_order5);
        e--;
    }
    while (f > 0) {
        var cust_order6 = {
            prod_name: "Bapesta Glitter Brown Low Cut",
            prod_price: 13200,
        }
        cust_order.push(cust_order6);
        f--;
    }
    while (g > 0) {
        var cust_order7 = {
            prod_name: "Vetior V Neck Long Sleeve",
            prod_price: 950,
        }
        cust_order.push(cust_order7);
        g--;
    }
    while (h > 0) {
        var cust_order8 = {
            prod_name: "Baby Dress Halter Long Sleeve",
            prod_price: 2370,
        }
        cust_order.push(cust_order8);
        h--;
    }
    while (i > 0) {
        var cust_order9 = {
            prod_name: "Matte Viscose Wide Leg Pants",
            prod_price: 830,
        }
        cust_order.push(cust_order9);
        i--;
    }
    while (j > 0) {
        var cust_order10 = {
            prod_name: "Dazcos Plaid Skirt High Waist",
            prod_price: 750,
        }
        cust_order.push(cust_order10);
        j--;
    }
    while (k > 0) {
        var cust_order11 = {
            prod_name: "Chunky High Platform Heels",
            prod_price: 3580,
        }
        cust_order.push(cust_order11);
        k--;
    }
    while (l > 0) {
        var cust_order12 = {
            prod_name: "New Balance 992 Navy White",
            prod_price: 14300,
        }
        cust_order.push(cust_order12);
        l--;
    }
    while (m > 0) {
        var cust_order13 = {
            prod_name: "Pink Collared Infant Dress",
            prod_price: 940,
        }
        cust_order.push(cust_order13);
        m--;
    }
    while (n > 0) {
        var cust_order14 = {
            prod_name: "Two Piece Infant Joggers",
            prod_price: 940,
        }
        cust_order.push(cust_order14);
        n--;
    }
    while (o > 0) {
        var cust_order15 = {
            prod_name: "Pokemon Pink Pajama Sleepwear",
            prod_price: 650,
        }
        cust_order.push(cust_order15);
        o--;
    }
    while (p > 0) {
        var cust_order16 = {
            prod_name: "Pokemon Blue Pajama Sleepwear",
            prod_price: 650,
        }
        cust_order.push(cust_order16);
        p--;
    }
    while (q > 0) {
        var cust_order17 = {
            prod_name: "Crocs Toddlers' x Pokemon 2",
            prod_price: 2300,
        }
        cust_order.push(cust_order17);
        q--;
    }
    while (r > 0) {
        var cust_order18 = {
            prod_name: "GU High Top Eevee Sneakers",
            prod_price: 3200,
        }
        cust_order.push(cust_order18);
        r--;
    }
    while (s > 0) {
        var cust_order19 = {
            prod_name: "Funko Pop Pikachu",
            prod_price: 670,
        }
        cust_order.push(cust_order19);
        s--;
    }
    while (t > 0) {
        var cust_order20 = {
            prod_name: "Funko Pop Charmander",
            prod_price: 670,
        }
        cust_order.push(cust_order20);
        t--;
    }
    while (u > 0) {
        var cust_order21 = {
            prod_name: "Funko Pop Bulbasaur",
            prod_price: 670,
        }
        cust_order.push(cust_order21);
        u--;
    }
    while (v > 0) {
        var cust_order22 = {
            prod_name: "Funko Pop Mewtwo",
            prod_price: 670,
        }
        cust_order.push(cust_order22);
        v--;
    }
    while (w > 0) {
        var cust_order23 = {
            prod_name: "Funko Pop Vulpix",
            prod_price: 670,
        }
        cust_order.push(cust_order23);
        w--;
    }
    while (z > 0) {
        var cust_order24 = {
            prod_name: "Funko Pop Flareon",
            prod_price: 670,
        }
        cust_order.push(cust_order24);
        z--;
    }
    cust_orderstring = JSON.stringify(cust_order);
    document.getElementById("cust_order").value = cust_orderstring;
}

function add(x) {
    const proditemandprice = document.createElement("li");
    const divprice = document.createElement("div");
    const button = document.createElement("button");
    if (x == 1) {
        a++;
        document.getElementById("prod" + x + "num").innerHTML = a;
        prod_name = "Nike x CE Windbreaker Jacket";
        prod_price = 3270;
        totalprod_price = totalprod_price + 3270;
        proditemandprice.className = "prod1";
    }
    if (x == 2) {
        b++;
        document.getElementById("prod" + x + "num").innerHTML = b;
        prod_name = "V Neck Sweater Vest with Polo";
        prod_price = 950;
        totalprod_price = totalprod_price + 950;
        proditemandprice.className = "prod2";
    }
    if (x == 3) {
        c++;
        document.getElementById("prod" + x + "num").innerHTML = c;
        prod_name = " Streetwear Black Cargo Pants";
        prod_price = 790;
        totalprod_price = totalprod_price + 790;
        proditemandprice.className = "prod3";
    }
    if (x == 4) {
        d++;
        document.getElementById("prod" + x + "num").innerHTML = d;
        prod_name = "Nexus Ripstop Cargo Shorts";
        prod_price = 590;
        totalprod_price = totalprod_price + 590;
        proditemandprice.className = "prod4";
    }
    if (x == 5) {
        e++;
        document.getElementById("prod" + x + "num").innerHTML = e;
        prod_name = "Air Jordan 1 Retro High Silver Toe";
        prod_price = 16700;
        totalprod_price = totalprod_price + 16700;
        proditemandprice.className = "prod5";
    }
    if (x == 6) {
        f++;
        document.getElementById("prod" + x + "num").innerHTML = f;
        prod_name = "Bapesta Glitter Brown Low Cut";
        prod_price = 13200;
        totalprod_price = totalprod_price + 13200;
        proditemandprice.className = "prod6";
    }
    if (x == 7) {
        g++;
        document.getElementById("prod" + x + "num").innerHTML = g;
        prod_name = "Vetior V Neck Long Sleeve";
        prod_price = 950;
        totalprod_price = totalprod_price + 950;
        proditemandprice.className = "prod7";
    }
    if (x == 8) {
        h++;
        document.getElementById("prod" + x + "num").innerHTML = h;
        prod_name = "Baby Dress Halter Long Sleeve";
        prod_price = 2370;
        totalprod_price = totalprod_price + 2370;
        proditemandprice.className = "prod8";
    }
    if (x == 9) {
        i++;
        document.getElementById("prod" + x + "num").innerHTML = i;
        prod_name = "Matte Viscose Wide Leg Pants";
        prod_price = 830;
        totalprod_price = totalprod_price + 830;
        proditemandprice.className = "prod9";
    }
    if (x == 10) {
        j++;
        document.getElementById("prod" + x + "num").innerHTML = j;
        prod_name = "Dazcos Plaid Skirt High Waist";
        prod_price = 750;
        totalprod_price = totalprod_price + 750;
        proditemandprice.className = "prod10";
    }
    if (x == 11) {
        k++;
        document.getElementById("prod" + x + "num").innerHTML = k;
        prod_name = "Chunky High Platform Heels";
        prod_price = 3580;
        totalprod_price = totalprod_price + 3580;
        proditemandprice.className = "prod11";
    }
    if (x == 12) {
        l++;
        document.getElementById("prod" + x + "num").innerHTML = l;
        prod_name = "New Balance 992 Navy White";
        prod_price = 14300;
        totalprod_price = totalprod_price + 14300;
        proditemandprice.className = "prod12";
    }
    if (x == 13) {
        m++;
        document.getElementById("prod" + x + "num").innerHTML = m;
        prod_name = "Pink Collared Infant Dress";
        prod_price = 940;
        totalprod_price = totalprod_price + 940;
        proditemandprice.className = "prod13";
    }
    if (x == 14) {
        n++;
        document.getElementById("prod" + x + "num").innerHTML = n;
        prod_name = "Two Piece Infant Joggers";
        prod_price = 940;
        totalprod_price = totalprod_price + 940;
        proditemandprice.className = "prod14";
    }
    if (x == 15) {
        o++;
        document.getElementById("prod" + x + "num").innerHTML = o;
        prod_name = "Pokemon Pink Pajama Sleepwear";
        prod_price = 650;
        totalprod_price = totalprod_price + 650;
        proditemandprice.className = "prod15";
    }
    if (x == 16) {
        p++;
        document.getElementById("prod" + x + "num").innerHTML = p;
        prod_name = "Pokemon Blue Pajama Sleepwear";
        prod_price = 650;
        totalprod_price = totalprod_price + 650;
        proditemandprice.className = "prod16";
    }
    if (x == 17) {
        q++;
        document.getElementById("prod" + x + "num").innerHTML = q;
        prod_name = "Crocs Toddlers' x Pokemon 2";
        prod_price = 2300;
        totalprod_price = totalprod_price + 2300;
        proditemandprice.className = "prod17";
    }
    if (x == 18) {
        r++;
        document.getElementById("prod" + x + "num").innerHTML = r;
        prod_name = "GU High Top Eevee Sneakers";
        prod_price = 3200;
        totalprod_price = totalprod_price + 3200;
        proditemandprice.className = "prod18";
    }
    if (x == 19) {
        s++;
        document.getElementById("prod" + x + "num").innerHTML = s;
        prod_name = "Funko Pop Pikachu Original";
        prod_price = 670;
        totalprod_price = totalprod_price + 670;
        proditemandprice.className = "prod19";
    }
    if (x == 20) {
        t++;
        document.getElementById("prod" + x + "num").innerHTML = t;
        prod_name = "Funko Pop Charmander Original";
        prod_price = 670;
        totalprod_price = totalprod_price + 670;
        proditemandprice.className = "prod20";
    }
    if (x == 21) {
        u++;
        document.getElementById("prod" + x + "num").innerHTML = u;
        prod_name = "Funko Pop Bulbasaur Original";
        prod_price = 670;
        totalprod_price = totalprod_price + 670;
        proditemandprice.className = "prod21";
    }
    if (x == 22) {
        v++;
        document.getElementById("prod" + x + "num").innerHTML = v;
        prod_name = "Funko Pop Mewtwo Original";
        prod_price = 670;
        totalprod_price = totalprod_price + 670;
        proditemandprice.className = "prod22";
    }
    if (x == 23) {
        w++;
        document.getElementById("prod" + x + "num").innerHTML = w;
        prod_name = "Funko Pop Vulpix Original";
        prod_price = 670;
        totalprod_price = totalprod_price + 670;
        proditemandprice.className = "prod23";
    }
    if (x == 24) {
        z++;
        document.getElementById("prod" + x + "num").innerHTML = z;
        prod_name = "Funko Pop Flareon Original";
        prod_price = 670;
        totalprod_price = totalprod_price + 670;
        proditemandprice.className = "prod24";
    }

    document.getElementById("totalprice").innerHTML = "₱" + totalprod_price;
    const item = document.createTextNode(prod_name);
    divprice.className = "cust_orderprice";
    const price = document.createTextNode("₱" + prod_price);
    divprice.appendChild(price);
    const remove = document.createTextNode("Remove!");
    button.classList.add("btn");
    button.classList.add("btn-danger");
    button.appendChild(remove);
    divprice.appendChild(button);
    proditemandprice.appendChild(item);
    proditemandprice.appendChild(divprice);
    proditemandprice.classList.add("product");
    document.getElementById("list").appendChild(proditemandprice);
    const product = document.getElementsByClassName("product");
    for(var ctr = 0; ctr < product.length; ctr++){
        product[ctr].classList.add("that" + ctr);
    }
    const btn = document.getElementsByClassName("btn-danger");
    for(var ctr = 0; ctr < btn.length; ctr++){
        btn[ctr].setAttribute("type", "button");
        btn[ctr].setAttribute("onclick", "remove(event)");
        btn[ctr].classList.add("this" + ctr);
    }
}

function subtract(x) {
    var y = 0;
    if (x == 1 && a > 0) {
        a--;
        document.getElementById("prod" + x + "num").innerHTML = a;
        totalprod_price = totalprod_price - 3270;
        const proda = document.getElementsByClassName("prod1");
        proda[0].remove();
    }
    if (x == 2 && b > 0) {
        b--;
        document.getElementById("prod" + x + "num").innerHTML = b;
        totalprod_price = totalprod_price - 950;
        const prodb = document.getElementsByClassName("prod2");
        prodb[0].remove();
    }
    if (x == 3 && c > 0) {
        c--;
        document.getElementById("prod" + x + "num").innerHTML = c;
        totalprod_price = totalprod_price - 790;
        const prodc = document.getElementsByClassName("prod3");
        prodc[0].remove();
    }
    if (x == 4 && d > 0) {
        d--;
        document.getElementById("prod" + x + "num").innerHTML = d;
        totalprod_price = totalprod_price - 590;
        const prodd = document.getElementsByClassName("prod4");
        prodd[0].remove();
    }
    if (x == 5 && e > 0) {
        e--;
        document.getElementById("prod" + x + "num").innerHTML = e;
        totalprod_price = totalprod_price - 16700;
        const prode = document.getElementsByClassName("prod5");
        prode[0].remove();
    }
    if (x == 6 && f > 0) {
        f--;
        document.getElementById("prod" + x + "num").innerHTML = f;
        totalprod_price = totalprod_price - 13200;
        const prodf = document.getElementsByClassName("prod6");
        prodf[0].remove();
    }
    if (x == 7 && g > 0) {
        g--;
        document.getElementById("prod" + x + "num").innerHTML = g;
        totalprod_price = totalprod_price - 950;
        const prodg = document.getElementsByClassName("prod7");
        prodg[0].remove();
    }
    if (x == 8 && h > 0) {
        h--;
        document.getElementById("prod" + x + "num").innerHTML = h;
        totalprod_price = totalprod_price - 2370;
        const prodh = document.getElementsByClassName("prod8");
        prodh[0].remove();
    }
    if (x == 9 && i > 0) {
        i--;
        document.getElementById("prod" + x + "num").innerHTML = i;
        totalprod_price = totalprod_price - 830;
        const prodi = document.getElementsByClassName("prod9");
        prodi[0].remove();
    }
    if (x == 10 && j > 0) {
        j--;
        document.getElementById("prod" + x + "num").innerHTML = j;
        totalprod_price = totalprod_price - 750;
        const prodj = document.getElementsByClassName("prod10");
        prodj[0].remove();
    }
    if (x == 11 && k > 0) {
        k--;
        document.getElementById("prod" + x + "num").innerHTML = k;
        totalprod_price = totalprod_price - 3580;
        const prodk = document.getElementsByClassName("prod11");
        prodk[0].remove();
    }
    if (x == 12 && l > 0) {
        l--;
        document.getElementById("prod" + x + "num").innerHTML = l;
        totalprod_price = totalprod_price - 14300;
        const prodl = document.getElementsByClassName("prod12");
        prodl[0].remove();
    }
    if (x == 13 && m > 0) {
        m--;
        document.getElementById("prod" + x + "num").innerHTML = m;
        totalprod_price = totalprod_price - 940;
        const prodm = document.getElementsByClassName("prod13");
        prodm[0].remove();
    }
    if (x == 14 && n > 0) {
        n--;
        document.getElementById("prod" + x + "num").innerHTML = n;
        totalprod_price = totalprod_price - 940;
        const prodn = document.getElementsByClassName("prod14");
        prodn[0].remove();
    }
    if (x == 15 && o > 0) {
        o--;
        document.getElementById("prod" + x + "num").innerHTML = o;
        totalprod_price = totalprod_price - 650;
        const prodo = document.getElementsByClassName("prod15");
        prodo[0].remove();
    }
    if (x == 16 && p > 0) {
        p--;
        document.getElementById("prod" + x + "num").innerHTML = p;
        totalprod_price = totalprod_price - 650;
        const prodp = document.getElementsByClassName("prod16");
        prodp[0].remove();
    }
    if (x == 17 && q > 0) {
        q--;
        document.getElementById("prod" + x + "num").innerHTML = q;
        totalprod_price = totalprod_price - 2300;
        const prodq = document.getElementsByClassName("prod17");
        prodq[0].remove();
    }
    if (x == 18 && r > 0) {
        r--;
        document.getElementById("prod" + x + "num").innerHTML = r;
        totalprod_price = totalprod_price - 3200;
        const prodr = document.getElementsByClassName("prod18");
        prodr[0].remove();
    }
    if (x == 19 && s > 0) {
        s--;
        document.getElementById("prod" + x + "num").innerHTML = s;
        totalprod_price = totalprod_price - 670;
        const prods = document.getElementsByClassName("prod19");
        prods[0].remove();
    }
    if (x == 20 && t > 0) {
        t--;
        document.getElementById("prod" + x + "num").innerHTML = t;
        totalprod_price = totalprod_price - 670;
        const prodt = document.getElementsByClassName("prod20");
        prodt[0].remove();
    }
    if (x == 21 && u > 0) {
        u--;
        document.getElementById("prod" + x + "num").innerHTML = u;
        totalprod_price = totalprod_price - 670;
        const produ = document.getElementsByClassName("prod21");
        produ[0].remove();
    }
    if (x == 22 && v > 0) {
        v--;
        document.getElementById("prod" + x + "num").innerHTML = v;
        totalprod_price = totalprod_price - 670;
        const prodv = document.getElementsByClassName("prod22");
        prodv[0].remove();
    }
    if (x == 23 && w > 0) {
        w--;
        document.getElementById("prod" + x + "num").innerHTML = w;
        totalprod_price = totalprod_price - 670;
        const prodw = document.getElementsByClassName("prod23");
        prodw[0].remove();
    }
    if (x == 24 && z > 0) {
        z--;
        document.getElementById("prod" + x + "num").innerHTML = z;
        totalprod_price = totalprod_price - 670;
        const prodz = document.getElementsByClassName("prod24");
        prodz[0].remove();
    }
    document.getElementById("totalprice").innerHTML = "₱" + totalprod_price;
}

function remove(event){
    var y = 0;
    while(!(event.target.classList.contains("this" + y))){
        y++;
    }
    const product = document.getElementsByClassName("product");
    for(var ctr = 0; ctr < product.length; ctr++){
        if(product[ctr].classList.contains("that" + y)){
            if(product[ctr].classList.contains("prod1")){
                a--;
                document.getElementById("prod1num").innerHTML = a;
                totalprod_price = totalprod_price - 3270;
            }
            else if(product[ctr].classList.contains("prod2")){
                b--;
                document.getElementById("prod2num").innerHTML = b;
                totalprod_price = totalprod_price - 950;
            }
            else if(product[ctr].classList.contains("prod3")){
                c--;
                document.getElementById("prod3num").innerHTML = c;
                totalprod_price = totalprod_price - 790;
            }
            else if(product[ctr].classList.contains("prod4")){
                d--;
                document.getElementById("prod4num").innerHTML = d;
                totalprod_price = totalprod_price - 590;
            }
            else if(product[ctr].classList.contains("prod5")){
                e--;
                document.getElementById("prod5num").innerHTML = e;
                totalprod_price = totalprod_price - 16700;
            }
            else if(product[ctr].classList.contains("prod6")){
                f--;
                document.getElementById("prod6num").innerHTML = f;
                totalprod_price = totalprod_price - 13200;
            }
            else if(product[ctr].classList.contains("prod7")){
                g--;
                document.getElementById("prod7num").innerHTML = g;
                totalprod_price = totalprod_price - 950;
            }
            else if(product[ctr].classList.contains("prod8")){
                h--;
                document.getElementById("prod8num").innerHTML = h;
                totalprod_price = totalprod_price - 2370;
            }
            else if(product[ctr].classList.contains("prod9")){
                i--;
                document.getElementById("prod9num").innerHTML = i;
                totalprod_price = totalprod_price - 830;
            }
            else if(product[ctr].classList.contains("prod10")){
                j--;
                document.getElementById("prod10num").innerHTML = j;
                totalprod_price = totalprod_price - 750;
            }
            else if(product[ctr].classList.contains("prod11")){
                k--;
                document.getElementById("prod11num").innerHTML = k;
                totalprod_price = totalprod_price - 3580;
            }
            else if(product[ctr].classList.contains("prod12")){
                l--;
                document.getElementById("prod12num").innerHTML = l;
                totalprod_price = totalprod_price - 14300;
            }
            else if(product[ctr].classList.contains("prod13")){
                m--;
                document.getElementById("prod13num").innerHTML = m;
                totalprod_price = totalprod_price - 940;
            }
            else if(product[ctr].classList.contains("prod14")){
                n--;
                document.getElementById("prod14num").innerHTML = n;
                totalprod_price = totalprod_price - 940;
            }
            else if(product[ctr].classList.contains("prod15")){
                o--;
                document.getElementById("prod15num").innerHTML = o;
                totalprod_price = totalprod_price - 650;
            }
            else if(product[ctr].classList.contains("prod16")){
                p--;
                document.getElementById("prod16num").innerHTML = p;
                totalprod_price = totalprod_price - 650;
            }
            else if(product[ctr].classList.contains("prod17")){
                q--;
                document.getElementById("prod17num").innerHTML = q;
                totalprod_price = totalprod_price - 2300;
            }
            else if(product[ctr].classList.contains("prod18")){
                r--;
                document.getElementById("prod18num").innerHTML = r;
                totalprod_price = totalprod_price - 3200;
            }
            else if(product[ctr].classList.contains("prod19")){
                s--;
                document.getElementById("prod19num").innerHTML = s;
                totalprod_price = totalprod_price - 670;
            }
            else if(product[ctr].classList.contains("prod20")){
                t--;
                document.getElementById("prod20num").innerHTML = t;
                totalprod_price = totalprod_price - 670;
            }
            else if(product[ctr].classList.contains("prod21")){
                u--;
                document.getElementById("prod21num").innerHTML = u;
                totalprod_price = totalprod_price - 670;
            }
            else if(product[ctr].classList.contains("prod22")){
                v--;
                document.getElementById("prod22num").innerHTML = v;
                totalprod_price = totalprod_price - 670;
            }
            else if(product[ctr].classList.contains("prod23")){
                w--;
                document.getElementById("prod23num").innerHTML = w;
                totalprod_price = totalprod_price - 670;
            }
            else if(product[ctr].classList.contains("prod24")){
                z--;
                document.getElementById("prod24num").innerHTML = z;
                totalprod_price = totalprod_price - 670;
            }
            product[ctr].remove();
            document.getElementById("totalprice").innerHTML = "₱" + totalprod_price;
        }
    }
}