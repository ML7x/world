var titles = [
    {name: "ناروتو",  img: "img/naruto1.jpg", genre: "شونين", genre2: "كوميديا", genre3: "أكشن", genre4: "", genre5: "", genre6: "", genre7: "", genre8: "", genre9: ""},
    {name: "هنتر اكس هنتر",  img: "img/hunter1.jpg", genre: "أكشن", genre2: "شونين", genre3: "", genre4: "", genre5: "", genre6: "", genre7: "", genre8: "", genre9: ""},
    {name: "هجوم العمالقة الجزء الأول",  img: "img/attack1.jpg", genre: "رعب", genre2: "أكشن", genre3: "", genre4: "", genre5: "", genre6: "", genre7: "", genre8: "", genre9: ""},
    {name: "ون بيس",  img: "img/onepiece1.jpg", genre: "أكشن", genre2: "شونين", genre3: "", genre4: "", genre5: "", genre6: "", genre7: "", genre8: "", genre9: ""},
    {name: "هايكيو الجزء الأول",  img: "img/hai1.jpg", genre: "شونين", genre2: "مدرسي", genre3: "كوميديا", genre4: "رياضي", genre5: "", genre6: "", genre7: "", genre8: "", genre9: ""},
    {name: "هايكيو الجزء الثاني",  img: "img/hai2.jpg", genre: "شونين", genre2: "مدرسي", genre3: "كوميديا", genre4: "رياضي", genre5: "", genre6: "", genre7: "", genre8: "", genre9: ""},
    {name: "هايكيو الجزء الثالث",  img: "img/hai3.jpg", genre: "شونين", genre2: "مدرسي", genre3: "كوميديا", genre4: "رياضي", genre5: "", genre6: "", genre7: "", genre8: "", genre9: ""},
    {name: "هايكيو الجزء الرابع",  img: "img/hai4.jpg", genre: "شونين", genre2: "مدرسي", genre3: "كوميديا", genre4: "رياضي", genre5: "", genre6: "", genre7: "", genre8: "", genre9: ""},
    {name: "مذكرة الموت",  img: "img/deathnote.jpg", genre: "شونين", genre2: "مدرسي", genre3: "رعب", genre4: "غموض", genre5: "", genre6: "", genre7: "", genre8: "", genre9: ""},

  ];

        // ----------- episodes-----------
var episode = [
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/BRnmXxxd8k4LQ", img: "img/attack1.jpg", alt: "حلقة 1" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/Gv5V34NQmeZ3L", img: "img/attack1.jpg", alt: "حلقة 2" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/V7P8r3m2vDnKk", img: "img/attack1.jpg", alt: "حلقة 3" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/55xLmeGQywkqy", img: "img/attack1.jpg", alt: "حلقة 4" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/zRW2qvVXn8agq", img: "img/attack1.jpg", alt: "حلقة 5" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/nDRWdR4yr8GDm", img: "img/attack1.jpg", alt: "حلقة 6" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/aZe4r7kGnL5vy", img: "img/attack1.jpg", alt: "حلقة 7" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/Gv5V32gZ7Ded6", img: "img/attack1.jpg", alt: "حلقة 8" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/N483pArvZZ5PZ", img: "img/attack1.jpg", alt: "حلقة 9" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/yZNGzx7GAxAML", img: "img/attack1.jpg", alt: "حلقة 10" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/Yqmw7z7g2yNYj", img: "img/attack1.jpg", alt: "حلقة 11" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/kepwYAwDzzVGG", img: "img/attack1.jpg", alt: "حلقة 12" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/2wxmPRkavYyY4", img: "img/attack1.jpg", alt: "حلقة 13" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/Y8ZLMWjYALKV3", img: "img/attack1.jpg", alt: "حلقة 14" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/pWxd4z3pM6KwQ", img: "img/attack1.jpg", alt: "حلقة 15" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/Y8ZLMGKGaADeQ", img: "img/attack1.jpg", alt: "حلقة 16" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/mXm24VMA5La58", img: "img/attack1.jpg", alt: "حلقة 17" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/wR5W4m7mKYKp6", img: "img/attack1.jpg", alt: "حلقة 18" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/AnpWPDggnz3km", img: "img/attack1.jpg", alt: "حلقة 19" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/jXzQaxBmM7vrg", img: "img/attack1.jpg", alt: "حلقة 20" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/AnpWPdm6m72Z4", img: "img/attack1.jpg", alt: "حلقة 21" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/PAYepvNYQpP3r", img: "img/attack1.jpg", alt: "حلقة 22" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/zGpeXVZYKvVgk", img: "img/attack1.jpg", alt: "حلقة 23" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/L5NKPXNWWY7xW", img: "img/attack1.jpg", alt: "حلقة 24" },
    {name: "هجوم العمالقة الجزء الأول", url: "https://www.solidfiles.com/e/4amQGv3Rjj8K7", img: "img/attack1.jpg", alt: "حلقة 25" },
    
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/nDgXLGkMVzBvv", img: "img/hai1.jpg", alt: "حلقة 1" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/dVgXL8ajjk3nA", img: "img/hai1.jpg", alt: "حلقة 2" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/azgXyz373v525", img: "img/hai1.jpg", alt: "حلقة 3" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/vzjrLNG3nGGXD", img: "img/hai1.jpg", alt: "حلقة 4" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/DGZy6e6axQWdn", img: "img/hai1.jpg", alt: "حلقة 5" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/nDgXLVBvBmNAg", img: "img/hai1.jpg", alt: "حلقة 6" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/nDgXLVQMrnYQB", img: "img/hai1.jpg", alt: "حلقة 7" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/38a6A24wv2nLz", img: "img/hai1.jpg", alt: "حلقة 8" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/kegKL6WZavKxa", img: "img/hai1.jpg", alt: "حلقة 9" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/j6grLVDVaNAap", img: "img/hai1.jpg", alt: "حلقة 10" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/r5VgLRXBzMaGn", img: "img/hai1.jpg", alt: "حلقة 11" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/azgXy7KwZnnwA", img: "img/hai1.jpg", alt: "حلقة 12" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/r5VgLaRK75ZRB", img: "img/hai1.jpg", alt: "حلقة 13" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/xZYrLW8a8Ykv3", img: "img/hai1.jpg", alt: "حلقة 14" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/j6grLN4dq8jk6", img: "img/hai1.jpg", alt: "حلقة 15" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/4yveMqkjyNgVx", img: "img/hai1.jpg", alt: "حلقة 16" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/Lwkyd83z6qAqv", img: "img/hai1.jpg", alt: "حلقة 17" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/WGgXKppMRLw2p", img: "img/hai1.jpg", alt: "حلقة 18" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/6d8jqDeB5vL8r", img: "img/hai1.jpg", alt: "حلقة 19" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/DGZy6QaWmGYNk", img: "img/hai1.jpg", alt: "حلقة 20" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/j6grLZwWPnQBZ", img: "img/hai1.jpg", alt: "حلقة 21" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/V7ZXMQ4KPQLKM", img: "img/hai1.jpg", alt: "حلقة 22" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/dVgXL4RqLKgna", img: "img/hai1.jpg", alt: "حلقة 23" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/BRZKWKNzMZNrp", img: "img/hai1.jpg", alt: "حلقة 24" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/38a6A64m6KxZk", img: "img/hai1.jpg", alt: "حلقة 25" },
    {name: "هايكيو الجزء الأول", url: "https://www.solidfiles.com/e/DGZy6mgzpA56q", img: "img/hai1.jpg", alt: "حلقة 26 أوفا" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/N4Z3dpZgYG6pP", img: "img/hai2.jpg", alt: "حلقة 1" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/vzj3xYzmDBaZw", img: "img/hai2.jpg", alt: "حلقة 2" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/K3mjYXZ7drynD", img: "img/hai2.jpg", alt: "حلقة 3" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/2w2m4jkVLg6aN", img: "img/hai2.jpg", alt: "حلقة 4" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/2w2m4jXNwKWB8", img: "img/hai2.jpg", alt: "حلقة 5" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/2w2m4D2M3AXer", img: "img/hai2.jpg", alt: "حلقة 6" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/dVgw2mngpdLnq", img: "img/hai2.jpg", alt: "حلقة 7" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/gNgwKWxyq537B", img: "img/hai2.jpg", alt: "حلقة 8" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/nDgWqYKGy3PzV", img: "img/hai2.jpg", alt: "حلقة 9" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/N4Z3rj8vnYVd8", img: "img/hai2.jpg", alt: "حلقة 10" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/R4Z2mKDmZjzDY", img: "img/hai2.jpg", alt: "حلقة 11" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/nDgWqGxja7GBR", img: "img/hai2.jpg", alt: "حلقة 12" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/WGgBNGR2vpWMR", img: "img/hai2.jpg", alt: "حلقة 13" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/K3mjM3ZqG7npD", img: "img/hai2.jpg", alt: "حلقة 14" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/4yvKwYkaQN2Dv", img: "img/hai2.jpg", alt: "حلقة 15" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/4yvKwYLWNvz5q", img: "img/hai2.jpg", alt: "حلقة 16" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/WGgBNQGYA6vqL", img: "img/hai2.jpg", alt: "حلقة 17" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/K3mjMgGejD8zB", img: "img/hai2.jpg", alt: "حلقة 18" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/MDZYqdK3NWB28", img: "img/hai2.jpg", alt: "حلقة 19" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/dVgw2PqMm7ZjR", img: "img/hai2.jpg", alt: "حلقة 20" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/2w2m4kk8g7nvN", img: "img/hai2.jpg", alt: "حلقة 21" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/j6gwRVvZpNyDW", img: "img/hai2.jpg", alt: "حلقة 22" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/R4Z2mDaQLN4Yq", img: "img/hai2.jpg", alt: "حلقة 23" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/88RmVzDWqgGyd", img: "img/hai2.jpg", alt: "حلقة 24" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/ABZmdrAmAyLL7", img: "img/hai2.jpg", alt: "حلقة 25" },
    {name: "هايكيو الجزء الثاني", url: "https://www.solidfiles.com/e/GvZV86YaqGRjP", img: "img/hai2.jpg", alt: "حلقة 26 أوفا" },
    {name: "هايكيو الجزء الثالث", url: "https://www.solidfiles.com/e/ABzQ3MZ75edaM", img: "img/hai3.jpg", alt: "حلقة 1" },
    {name: "هايكيو الجزء الثالث", url: "https://www.solidfiles.com/e/2wDvYDnmVd7W3", img: "img/hai3.jpg", alt: "حلقة 2" },
    {name: "هايكيو الجزء الثالث", url: "https://www.solidfiles.com/e/882MyN6eN3V2m", img: "img/hai3.jpg", alt: "حلقة 3" },
    {name: "هايكيو الجزء الثالث", url: "https://www.solidfiles.com/e/e6MxZnxQ6eL52", img: "img/hai3.jpg", alt: "حلقة 4" },
    {name: "هايكيو الجزء الثالث", url: "https://www.solidfiles.com/e/p5VKe8XBeQYyg", img: "img/hai3.jpg", alt: "حلقة 5" },
    {name: "هايكيو الجزء الثالث", url: "https://www.solidfiles.com/e/dVQxM8Nw2m32z", img: "img/hai3.jpg", alt: "حلقة 6" },
    {name: "هايكيو الجزء الثالث", url: "https://www.solidfiles.com/e/vz8x5D7ajdd24", img: "img/hai3.jpg", alt: "حلقة 7" },
    {name: "هايكيو الجزء الثالث", url: "https://www.solidfiles.com/e/ABzQ3B8xG74Kk", img: "img/hai3.jpg", alt: "حلقة 8" },
    {name: "هايكيو الجزء الثالث", url: "https://www.solidfiles.com/e/gNqxM6YXVzrLj", img: "img/hai3.jpg", alt: "حلقة 9" },
    {name: "هايكيو الجزء الثالث", url: "https://www.solidfiles.com/e/mDjxW2mx4axk8", img: "img/hai3.jpg", alt: "حلقة 10" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/YqAAXgQYakx8Y", img: "img/hai4.jpg", alt: "حلقة 1" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/882q4Dx783W8x", img: "img/hai4.jpg", alt: "حلقة 2" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/383yBMrBpQR5y", img: "img/hai4.jpg", alt: "حلقة 3" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/X82MPwnPAX2n8", img: "img/hai4.jpg", alt: "حلقة 4" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/e6RBr4zrNQPMK", img: "img/hai4.jpg", alt: "حلقة 5" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/6daP5AB7gz8yX", img: "img/hai4.jpg", alt: "حلقة 6" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/gNn24Pm5LpAGz", img: "img/hai4.jpg", alt: "حلقة 7" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/zRRKmL2xNaDm5", img: "img/hai4.jpg", alt: "حلقة 8" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/e66vLkwqD42Xw", img: "img/hai4.jpg", alt: "حلقة 9" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/dVNyAjRjyWQ3R", img: "img/hai4.jpg", alt: "حلقة 10" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/zR33jg5dXgxwm", img: "img/hai4.jpg", alt: "حلقة 11" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/2wYqmnBgNXdW4", img: "img/hai4.jpg", alt: "حلقة 12" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/gNmkW4mejdWqp", img: "img/hai4.jpg", alt: "حلقة 13" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/DGdZQnrydqaPL", img: "img/hai4.jpg", alt: "حلقة 14" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/nDgK2zGpVZ6Z4", img: "img/hai4.jpg", alt: "حلقة 15" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/88RPMpAanA8pY", img: "img/hai4.jpg", alt: "حلقة 16" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/DGLyzgna6dMer", img: "img/hai4.jpg", alt: "حلقة 17" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/Lw2YqMnqgQ6nQ", img: "img/hai4.jpg", alt: "حلقة 18" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/yZp54YLvNeqBq", img: "img/hai4.jpg", alt: "حلقة 19" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/YqGyXgeKvgyB8", img: "img/hai4.jpg", alt: "حلقة 20" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/j6mVYpZAnG27K", img: "img/hai4.jpg", alt: "حلقة 21" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/R4eRBm58VnVYa", img: "img/hai4.jpg", alt: "حلقة 22" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/Gv5kQWMrypWZv", img: "img/hai4.jpg", alt: "حلقة 23" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/88xw8WZzze4pV", img: "img/hai4.jpg", alt: "حلقة 24" },
    {name: "هايكيو الجزء الرابع", url: "https://www.solidfiles.com/e/55ZW4WYRKy8PZ", img: "img/hai4.jpg", alt: "حلقة 25" },

    {name: "ناروتو", url: "https://www.solidfiles.com/e/mDRp5nKnY4gK6", img: "img/naruto1.jpg", alt: "حلقة 1" },
    {name: "ناروتو", url: "https://www.solidfiles.com/e/ABVA6qgD6Nr5w", img: "img/naruto1.jpg", alt: "حلقة 2" },
    {name: "ناروتو", url: "https://www.solidfiles.com/e/GvYq36qQm7aw3", img: "img/naruto1.jpg", alt: "حلقة 3" },
    {name: "هنتر اكس هنتر", url: "https://www.solidfiles.com/e/V7ZPWQpMN27WY", img: "img/hunter1.jpg", alt: "حلقة 1" },
    {name: "هنتر اكس هنتر", url: "https://www.solidfiles.com/e/WGgZVXR8nxRa2", img: "img/hunter1.jpg", alt: "حلقة 2" },
    {name: "هنتر اكس هنتر", url: "https://www.solidfiles.com/e/X8g76RLYjPXpa", img: "img/hunter1.jpg", alt: "حلقة 3" },
    {name: "ون بيس", url: "https://www.solidfiles.com/e/N47xrm4LDZqDd", img: "img/onepiece1.jpg", alt: "حلقة 1" },
    {name: "ون بيس", url: "https://www.solidfiles.com/e/e6zBaLkL3nZ3n", img: "img/onepiece1.jpg", alt: "حلقة 2" },
    {name: "ون بيس", url: "https://www.solidfiles.com/e/w376ymkmQNXg3", img: "img/onepiece1.jpg", alt: "حلقة 3" },

    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/L57BKg6353exe", img: "img/deathnote.jpg", alt: "حلقة 1" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/5aexmw2arBAPX", img: "img/deathnote.jpg", alt: "حلقة 2" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/4a6x7A37n7KRN", img: "img/deathnote.jpg", alt: "حلقة 3" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/yRKNzqxaAmpNa", img: "img/deathnote.jpg", alt: "حلقة 4" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/L57vaj2QRp484", img: "img/deathnote.jpg", alt: "حلقة 5" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/nG6RPpMAKVqxw", img: "img/deathnote.jpg", alt: "حلقة 6" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/r6Dq43XvQm8Gv", img: "img/deathnote.jpg", alt: "حلقة 7" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/Y8dm6BGZ8WNWQ", img: "img/deathnote.jpg", alt: "حلقة 8" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/nG6Rr45w2Wxgz", img: "img/deathnote.jpg", alt: "حلقة 9" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/2GWxNB3qAYyen", img: "img/deathnote.jpg", alt: "حلقة 10" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/Y8dm6D6z2DVBz", img: "img/deathnote.jpg", alt: "حلقة 11" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/aZRjdwDzAxWrL", img: "img/deathnote.jpg", alt: "حلقة 12" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/gnPG8jLWv6kBQ", img: "img/deathnote.jpg", alt: "حلقة 13" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/XB7aqjeq4wgN7", img: "img/deathnote.jpg", alt: "حلقة 14" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/M2mRWd5kmmBw6", img: "img/deathnote.jpg", alt: "حلقة 15" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/pWMXpYk2g2AZL", img: "img/deathnote.jpg", alt: "حلقة 16" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/K3aYdkWKP4rdq", img: "img/deathnote.jpg", alt: "حلقة 17" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/ABeQGyZBPBAmv", img: "img/deathnote.jpg", alt: "حلقة 18" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/qVzpm3dn8dGLm", img: "img/deathnote.jpg", alt: "حلقة 19" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/2GxzXQMWm2YzW", img: "img/deathnote.jpg", alt: "حلقة 20" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/pWMv7BkDyADXj", img: "img/deathnote.jpg", alt: "حلقة 21" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/RKMdwLvRx25Bk", img: "img/deathnote.jpg", alt: "حلقة 22" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/By8YVMr6g38xq", img: "img/deathnote.jpg", alt: "حلقة 23" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/M2mRWjmrLKq8K", img: "img/deathnote.jpg", alt: "حلقة 24" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/p5prPRDrdGGVz", img: "img/deathnote.jpg", alt: "حلقة 25" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/ZQGWZzRvaQnna", img: "img/deathnote.jpg", alt: "حلقة 26" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/yRKg67ajjvwpG", img: "img/deathnote.jpg", alt: "حلقة 27" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/vzBednBQ8Mmqk", img: "img/deathnote.jpg", alt: "حلقة 28" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/DKD8Xp26gnM8A", img: "img/deathnote.jpg", alt: "حلقة 29" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/qVjrdyNNQQDyL", img: "img/deathnote.jpg", alt: "حلقة 30" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/mDBxnMWXGD8NB", img: "img/deathnote.jpg", alt: "حلقة 31" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/P4R2P8rLYY233", img: "img/deathnote.jpg", alt: "حلقة 32" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/6an7G84p2KgRN", img: "img/deathnote.jpg", alt: "حلقة 33" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/DGDWr4z2NvGxm", img: "img/deathnote.jpg", alt: "حلقة 34" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/kepx6NV45BQBa", img: "img/deathnote.jpg", alt: "حلقة 35" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/ABeQGem38dzD6", img: "img/deathnote.jpg", alt: "حلقة 36" },
    {name: "مذكرة الموت", url: "https://www.solidfiles.com/e/38xpkr8DjKGWa", img: "img/deathnote.jpg", alt: "حلقة 37" },

]


function FillAll() {
    document.getElementById("titles").innerHTML = '';
    titles.forEach((title)=>{
        document.getElementById("titles").innerHTML += '<div onclick="FillAndDontGo(this.id)" id="'+title.name+'" class="g-item pointer animation"><img src="'+title.img+'"><p class="center">'+title.name+'</p></div>';
    })}

function FillGenre(params) {
    document.getElementById("titles").innerHTML = '';
    titles.forEach((title)=>{
    if (title.genre.startsWith(params)||title.genre2.startsWith(params)||title.genre3.startsWith(params)||title.genre4.startsWith(params)||title.genre5.startsWith(params)||title.genre6.startsWith(params)||title.genre7.startsWith(params)||title.genre8.startsWith(params)||title.genre9.startsWith(params)) {
        document.getElementById("titles").innerHTML += '<div onclick="FillAndDontGo(this.id)" id="'+title.name+'" class="g-item pointer animation"><img src="'+title.img+'"><p class="center">'+title.name+'</p></div>';
}})}


// works and sends you to 2m // use for first page and search
function FillAndGo(params) {
    document.getElementById("titles").innerHTML = '';
    document.getElementById('title').innerHTML = params;

    BackButton();
    episode.forEach((ep)=>{
        if (ep.name.startsWith(params)){
        document.getElementById("titles").innerHTML += '<div onclick="TheVideo(this.id)" id="'+ep.url+'" class="g-item pointer animation"><img src="'+ep.img+'"><p class="center">'+ep.alt+'</p></div>';
        }
 
    })
}
// works and doesnt send you to 2m

function FillAndDontGo(params) {
    document.getElementById("titles").innerHTML = '';
    document.getElementById('title').innerHTML = params;

    episode.forEach((ep)=>{
        if (ep.name.startsWith(params)){
        document.getElementById("titles").innerHTML += '<div onclick="TheVideo(this.id)" id="'+ep.url+'"  class="g-item pointer animation"><img src="'+ep.img+'"><p class="center">'+ep.alt+'</p></div>';
        }
 
    })
}

function TheVideo(params) {
    main3();
    document.getElementById("m3").innerHTML = '';
    document.getElementById("m3").innerHTML = '<iframe width="100%" height="350" src="'+params+'" frameborder="0" allow="accelerometer; autoplay;  picture-in-picture" allowfullscreen sandbox="allow-scripts"></iframe>';

}




function search(params) {
    document.getElementById("titles").innerHTML = '';
    document.getElementById('title').innerHTML = params;
    SearchOpen();
    main2();
    titles.forEach((title)=>{
        if (title.name.startsWith(params)){
            document.getElementById("titles").innerHTML += '<div onclick="FillAndDontGo(this.id)" id="'+title.name+'" class="g-item pointer animation"><img src="'+title.img+'"><p class="center">'+title.name+'</p></div>';
        }
 
    })
}























//-----------------------------------------



function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  /*An array containing all the country names in the world:*/
  var anie = ["هجوم العمالقة الجزء الأول","هنتر اكس هنتر","ناروتو","ون بيس","هايكيو الجزء الأول","هايكيو الجزء الثالث","هايكيو الجزء الثاني","هايكيو الجزء الرابع","مذكرة الموت","Zimbabwe","Zimbabwe","Zimbabwe","Zimbabwe","Zimbabwe","Zimbabwe"];
  
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), anie);

