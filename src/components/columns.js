export const COLUMNS = [
    {
        Header: "First Name",
        accessor: "firstname",
    },
    {
        Header: "Last Name",
        accessor: "lastname",
    },
    {
        Header: "Field",
        accessor: "field",
    },
    {
        Header: "Result",
        accessor: "result",
    }
]

export const GROUPED_COLUMNS = [
    {
        Header: "Name",
        columns: [
            {
                Header: "First Name",
                accessor: "firstname",
            },
            {
                Header: "Last Name",
                accessor: "lastname",
            },
        ]
    },
    {
        Header: "Info",
        columns: [
            {
                Header: "Field",
                accessor: "field",
            },
            {
                Header: "Result",
                accessor: "result",
            }
        ]
    },
]