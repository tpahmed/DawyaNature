import { DataGrid } from "@mui/x-data-grid";
import './Inbox.css';

const COLORS = {
    Green : '#92C83E',
    Dark_Green : '#72A81E',
    Light_Green : '#B2E85E',
    Orange : '#F2721F',
    Dark_Orange : '#D25200',
    Light_Orange : '#FF923F'
}

const COLUMNS = [
    { field:'id', headerName:'ID', headerClassName:'InboxTableHeader', cellClassName: 'InboxTablecell', headerAlign: 'center' },
    { field:'nom', headerName:'Nom', headerClassName:'InboxTableHeader', cellClassName: 'InboxTablecell', headerAlign: 'center'  },
    { field:'prenom', headerName:'Prenom', headerClassName:'InboxTableHeader', cellClassName: 'InboxTablecell', headerAlign: 'center'  },
    { field:'age', headerName:'Age', headerClassName:'InboxTableHeader', cellClassName: 'InboxTablecell', headerAlign: 'center'  },
    { field:'ville', headerName:'Ville', headerClassName:'InboxTableHeader', cellClassName: 'InboxTablecell', headerAlign: 'center'  },
    // { field:'pays', headerName:'Pays' },
    // { field:'typeclient', headerName:'Types Client' },
    // { field:'Nombre de personnes', headerName:'Nombre de personnes' },
    // { field:'listeoffres', headerName:'Liste Offres' },
    // { field:'Datedebut', headerName:'Date Debut' },
    // { field:'Datefin', headerName:'Date Fin' },
    // { field:'repasjbala', headerName:'Repas Jbala' },
    // { field:'SouhaitsParticuliers', headerName:'Souhaits Particuliers' }
];
const ROW = [
    {
        id:'1',
        nom:'test1',
        prenom:'sest1',
        age:10,
        ville:'tanger'
    },
    {
        id:'2',
        nom:'test2',
        prenom:'sest2',
        age:20,
        ville:'tanger'
    },
    {
        id:'3',
        nom:'test3',
        prenom:'sest3',
        age:30,
        ville:'tanger'
    },
    {
        id:'4',
        nom:'test4',
        prenom:'sest4',
        age:40,
        ville:'tanger'
    },
]

export default function Inbox(){
    return (
        <div className="Inbox">
            <DataGrid
                sx={{
                    boxShadow: 2,
                    border: 2,
                    backgroundColor:COLORS.Light_Orange,
                    borderColor: COLORS.Dark_Orange,
                    '& .MuiDataGrid-cell:hover': {
                      color: COLORS.Dark_Orange,
                    }
                }}
                onRowClick={(a)=>{console.log(a.row.id)}}
                columns={COLUMNS}
                rows = {ROW}
            />
        </div>
    )
}