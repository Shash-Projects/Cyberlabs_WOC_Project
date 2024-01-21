const pageContent = [
    {
        id: 1,
        category: "Anime",
        heading: "Light vS L",
        desc: "Gather round, folks! It's time for a clash of the titans! Picture this: Light Yagami, the grand maestro of notebooks and oh-so-questionable life choices, faces off against the enigmatic L, whos so mysterious, he makes Sherlock Holmes look like an open book! Its a battle where one writes the rules and the other deciphers them with more quirks than a Rubik cube! Cast your vote and witness a showdown so intense, it might just answer the age-old question: who keeps stealing socks from the laundry? This showdown's hotter than a debate on whether ketchup belongs on sushi! Your vote matters, and so does the popcorn for this drama extravaganza!",
        img: "img/L.jpeg",
        cand1: "Darkest Light",
        cand2: "Cunning L",


    },
    {
        id: 2,
        category: "Politics",
        heading: "Elections for Gymkhana President",
        img: "img/hurray.jpeg",
        desc: "Hey there, fellow scholars and mischief-makers! Imagine a campus where the vending machines dispense free snacks, the Wi-Fi is faster than a cheetah on caffeine, and the study sessions come with a side of epic pizza parties. That's the world we're campaigning for, folks! Voting in these student body elections isn't just about picking a face on a poster; it's about deciding who's gonna turn okay into oh yeah! Think about it—imagine a president who can score us more parking spots or a VP who can conjure up nap pods in the library. Your vote isn't just a tick on a ballot; it's a secret ingredient in the recipe for an insanely awesome campus life. So, strap on your voting boots and let's turn this campus into a haven of academic awesomeness!",
        cand1: "Rajwant Singh",
        cand2: "Shashwat Nautiyal",
    },
    {
        id: 3,
        category: "Anime",
        heading: "Goku vS Saitama",
        desc: "Ladies and Gentlemen, hold onto your seats because we've got a battle that'll make your hair stand up more than Goku's power level! On one side, we've got the spiky-haired Saiyan sensation, Goku, who's spent more time training than the rest of us have spent sleeping! And on the flip side, there's Saitama, the hero for fun who can punch holes through boredom faster than you can say one punch ! It's a face-off between the ultimate powerhouse and the man who makes bald look bold! Cast your vote and witness a showdown so epic, it might just settle the debate on whether to fold or crumple toilet paper! This showdown's more anticipated than a reunion of socks that disappeared in the laundry. Your vote could determine who gets the last piece of dessert in the superhero cafeteria, so choose wisely!",
        img: "img/goku.jpeg",
        cand1: "Super Cyan Goku",
        cand2: "One Punch",

    },
    {
        id: 4,
        category: "Sports",
        img: "img/crowd.jpg",
        heading: " Messi vs Ronaldo",
        desc: "Alright, sports fanatics and goal-scoring enthusiasts, it's showdown time! We've got Messi and Ronaldo—the dynamic duo of the football universe. Picture this: Messi, the wizard with the ball, the maestro of dribbling—his moves are so slick, they could outshine a freshly waxed dance floor. Then there's Ronaldo, the powerhouse, the human highlight reel—his goals are as frequent as coffee refills on a Monday morning! Choosing between these legends is like picking between a magic show and a fireworks display. Messi might just magic his way into your heart with those feet of gold, while Ronaldo's goals are like fireworks lighting up the sky with jaw-dropping moments. So, dear football aficionados, it's time to pick your MVP. Are you on Team Messi, the magician with the ball, or Team Ronaldo, the goal-scoring sensation? The whistle's blowing, and the game's in your hands—er, votes! Let the football frenzy begin!",
        cand1: "Magical Messi",
        cand2: "G.O.A.T",   
    },
    {
        id: 5,
        category: "Pop Culture",
        img: "img/bullying.jpeg",
        heading: "Bts vS One Direction",
        desc:
            "Alright, music mavens and fandom fanatics, buckle up for the ultimate showdown! In one corner, we've got BTS—the K-pop kings with dance moves smoother than butter on a hot pancake. These guys aren't just a band; they're a whole universe of catchy tunes and killer choreography. But wait, hold onto your hats, because in the opposite corner, we've got 1D—those charming lads who made teenage hearts flutter like confetti in a storm! They're the OG heartthrobs who made What Makes You Beautiful an anthem for a generation. Choosing between these musical dynasties is like trying to pick a favorite flavor of ice cream—impossible, yet oh-so-tempting! Are you grooving with BTS, the kings of the global stage, or sailing the high notes with 1D, the chart-topping legends? It's a tough call, but remember, your vote isn't just about music; it's about which rhythm makes your heart beat a little faster! Let the harmonious battle begin!",
        cand1: "Army",
        cand2: "Directioners",
        },
    {
        id: 6,
        category: "Pop Culture",
        img: "img/west_taylor.jpeg",
        heading: "Kanye West vS Taylor Swift ",
        desc: " Ladies and gentlemen, indulge me in the theater of musical royalty! We present the unparalleled clash between the ever-quotable maestro, Kanye West, and the lyrical enchantress, Taylor Swift. Picture this: Kanye, a virtuoso in controversy, and Taylor, whose melodies have whispered into the souls of generations. It's a symphony of styles, a tango of tempos, and more anticipation than the unveiling of a renowned masterpiece. Cast your vote and become a part of a saga so riveting, it might just decipher the enigma of missing socks in the laundry. This duel is as iconic as a Shakespearean feud, so choose your champion and let harmony reign supreme!",
        cand1: "West wind",
        cand2: "Swifity",
    },
    {
        id: 7,
        category: "Politics",
        heading: "Modi vs Rahul",
        img: "img/backview.jpg",
        desc: "Picture this: in one corner, you've got Narendra Modi, the man with a vision as grand as his speeches! He's like the Energizer Bunny, constantly on the move, making policies with the same fervor most of us reserve for binge-watching Netflix. And in the other corner, Rahul Gandhi, the suave and charming politico whose speeches sometimes feel like a roller coaster ride—unexpected turns and occasional loop-de-loops included! Voting for Modi is like opting for a blockbuster movie—you know there'll be drama, action, and some unexpected twists! On the flip side, voting for Rahul is akin to choosing the cozy rom-com—it's relaxed, sometimes a tad unpredictable, but always leaves you smiling. So, who do you pick? The high-octane drama or the feel-good charm? It's a tough choice, but hey, that's the beauty of democracy!",
        cand1: "",
        cand2: "",
    },
    {
        id: 8,
        category: "Food",
        img: "img/bg.jpg",
        heading: "Chocholate vS Ice-Cream",
        desc: "Alright, listen up, sweet-toothed scholars! We're here to settle the ultimate dilemma: ice cream or chocolate. Picture this: a land where rivers flow with molten chocolate and the mountains are made of the creamiest, dreamiest ice cream. We are not just talking about any old chocolate or any run-of-the-mill ice cream; we are talking about a flavor showdown of epic proportions. Imagine a president for chocolate—the smooth operator who knows how to melt hearts and make your taste buds do the happy dance. But hold up, an ice cream advocate might just scoop in with promises of brain freeze-inducing joy and flavors that will make your world spin faster than your favorite roller coaster. So, dear friends, its decision time! Are you Team Cocoa or Team Cream? Your vote isn t just about a treat; its about the fate of your taste buds! Choose wisely, because the flavor you pick today will be the scoop that shapes your tomorrow!",
        cand1: "Token of love",
        cand2: "Childhood crush",
    },
    {
        id: 9,
        category: "Anime",
        heading: "Masao vS Bo-Chan",
        desc: " Attention, mischief enthusiasts! Prepare for the clash of legendary pranksters—Masao and Bo Chan! Masao, the mastermind with more tricks than a magician's hat, faces off against Bo Chan, the stealthy ninja of sneaky surprises! It's a showdown of giggles and surprises, where every vote counts like the last slice of pizza at a sleepover. Choose your prank champion and witness a battle so hilarious, even the squirrels are taking notes! Cast your vote and be part of the chaos, where the giggles are as endless as Masao's pranks and Bo Chan's stealthy surprises. Your vote isn't just a choice; it's a ticket to the most epic gigglefest in neighborhood history!",
        img: "img/shinchan.jpeg",
        cand1: "Cry Baby",
        cand2: "Traumatised kid",
    },


    {
        id: 10,
        category: "Politics",
        heading: "New Headmaster",
        desc: "Choosing between Dhumbledore and Snape? It's like picking between a phoenix and a pink toadstool. One's got the wisdom of a wizard, the other, well, the charm of a cat hairball. Choose wisely, voters – magic or mayhem?",
        img: "img/potter.jpeg",
        cand1: "Dumb Professor",
        cand2: "Sneaky Snake",
    },
    {
        id: 11,
        category: "Campus Affairs",
        heading: "Valentines vS Bajrang Dal",
        desc: "Ah, the eternal battle of love versus the fervor of the Bajrang Dal! It's like pitting Cupid against a fleet of determined superheroes in saffron! Picture this: hearts flying in one corner, arrows aimed at unsuspecting souls, while in the other, a mighty roar accompanied by the sound of trishuls clanking. It's a clash of romantic rendezvous versus the valiant defenders of tradition! But hey, who needs heart-shaped chocolates when you can have heated debates and the occasional swoop of a flying hug? Cast your vote wisely, folks, because this contest is a mix of passion and passion!  Who will prevail? The fluttering hearts or the unwavering principles? It's a battle for the ages—where Cupid's bow meets the trishul's might! Cast your votes and let the cosmic comedy of this clash unfold!",
        img: "img/romeo.jpeg",
        cand1: "Valentine's Arrow",
        cand2: "Dal's Danda",
    }

]


export default pageContent;