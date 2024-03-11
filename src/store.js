import {reactive} from 'vue'

export const store = reactive({

    languages: ["English", "Italian", "Chinese", "Spanish", "Arabic", "Portuguese", "Indonesian/Malay", "French", "Japanese", "Russian", "German"],

    menuItems: [
        { name: "Course" },
        { name: "Zoom" },
        { 
          name: "Pages",
          items: [
            { name: "Blog" },
            { name: "Home" },
            { name: "Shortcodes" },
            { name: "Course" },
            { name: "Membership A..." },
            { name: "Typography" }
          ]
        },
        { name: "Bundles" },
        { name: "Course Formats" },
        { name: "Add Course" },
        { name: "Demos" }
    ],

    icons: [
        '<i class="fa-brands fa-facebook"></i>',
        '<i class="fa-brands fa-twitter"></i>',
        '<i class="fa-brands fa-instagram"></i>',
        '<i class="fa-brands fa-behance"></i>',
        '<i class="fa-brands fa-dribbble"></i>',
        '<i class="fa-brands fa-flickr"></i>',
        '<i class="fa-brands fa-git"></i>',
        '<i class="fa-brands fa-linkedin"></i>',
        '<i class="fa-brands fa-pinterest"></i>'
    ],
});