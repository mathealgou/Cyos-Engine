import img1 from"../images/1.png"

export const story = {
    page1: {
        title: "Page 1",
        text: "You have two options. You can to page 2 or page 3",
        backgroundImage: img1,
        options: [
            {
                name: "Go to page 2",
                goTo: 2
            },
            {
                name: "Go to page 3",
                goTo: 3
            }
        ]
    },
    page2: {
        title: "Page 2",
        text: "aaaaaaaaa",
        options: [
            {
                name: "Go to page 1",
                goTo: 1
            },
            {
                name: "Go to page 3",
                goTo: 3
            }
        ]
    },
    page3: {
        title: "Page 3",
        text: "Page 3",
        options: [
            {
                name: "Go to page 1",
                goTo: 1
            },
            {
                name: "Go to page 2",
                goTo: 2
            }
        ]
    }
}