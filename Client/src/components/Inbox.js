import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { get_clients_min } from "../server_control/connection";
import './Inbox.css';

export default function Inbox(){
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
        { field:'ville', headerName:'Ville', headerClassName:'InboxTableHeader', cellClassName: 'InboxTablecell', headerAlign: 'center'  },
        { field:'Nombrepersonne', headerName:'No Personne', headerClassName:'InboxTableHeader', cellClassName: 'InboxTablecell', headerAlign: 'center'  },
        { field:'DateDebut', headerName:'Date de Debut', headerClassName:'InboxTableHeader', cellClassName: 'InboxTablecell', headerAlign: 'center'  },
    ];
    let [ROW,setROW] = useState([]);

    useEffect(()=>{
        get_clients_min().then((r)=>{
            let data = r.data.reverse();
            setROW(data);
        });
    },[])
    
    
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
                onRowClick={(a)=>{window.location = `/dashboard/client?id=${a.row.id}`}}
                columns={COLUMNS}
                rows = {ROW}
            />
        </div>
    )
}