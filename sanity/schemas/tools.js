export default {
    name: 'tools',
    type: 'document',
    title: 'Tools',
    fields: [
        { name: "tool", type: "string", title: 'Tool Name' },
        { name: "description", type: "string", title: 'Tool Description' },
        { name: "slug", type: "slug", title: 'Tool slug' ,options:{
            source:'tool'
        }},
        {
            name: "context", type: "array", title: 'Context', of: [{
                type: 'block'
            }, {
                type: 'image',
                fields: [{
                    type: 'text',
                    name: 'alt',
                    title: 'Alternative Text',
                }]
            }]
        },
    ]
}