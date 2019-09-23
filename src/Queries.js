import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('dbName')

// adds an entry, optionally also add it to a list.
const addEntry = (entry, list = null) => {
    const validated_entry = obtainEntry(entry);
    if (list !== null && validated_entry != null) {
        addEntryToList(entry,list);
    }
    return validated_entry
    
}

// checks if entry already exists.
// validates if entry is valid 
const obtainEntry = (entry) => {
    db.transaction((txn) => {
        getEntry(txn, name)
    },)
}

// searches database for entry
const getEntry = (tx) => {
    tx.executeSql(sqlStatement, arguments, success, error)
}

export const createList = async (name, description) => {
    const list_exists = await listExists(name);
    if (list_exists) {
        throw new Error(`list with name ${name} already exists!`);
    } else {
        result_set = await createListInTable(name,description);
        console.log(result_set)
        return result_set;
    }
}

const createListInTable = async(name, description) => {
    const query = "insert into lists (name, description) values (?, ?)";
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                query,[name,description],err => reject(err), 
                (_,result_set) => {
                    resolve(result_set);
                }
            )
        })
    })
}

const getLists = async () => {
    const query = "select * from lists;"
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                query,[list_name],
                (_,result_set) => {
                    console.log("show me the money","- what i wanted:",result_set);
                    if (result_set.rows.length == 1) {
                       resolve(true);
                    } else {
                    resolve(false);
                    }
                },
                err => reject(err), 
            )
        })
    })
}

const listExists = (list_name) => {
    const query = `SELECT id FROM lists WHERE name = ?;`
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                query,[list_name],
                (_,result_set) => {
                    console.log("show me the money","- what i wanted:",result_set);
                    if (result_set.rows.length == 1) {
                       resolve(true);
                    } else {
                    resolve(false);
                    }
                },
                err => reject(err), 
            )
        })
    })
}

const createTable = (tableSql) => {
    db.transaction(tx => {
        tx.executeSql(
            tableSql, [],(_,ob) => console.log("i make things",tableSql,ob),
            (_,ob) => console.warn("i fake things", tableSql,ob)
        );
      });
}

export const setUpTables = () => {
    createTable(entires_table_sql);
    createTable(lists_table_sql);
    createTable(many_entries_to_many_lists_table_sql);
}



const entires_table_sql = `CREATE TABLE IF NOT EXISTS entries (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT UNIQUE,
    weight int NOT NULL
);`

const lists_table_sql = `CREATE TABLE IF NOT EXISTS  lists (
       id INTEGER PRIMARY KEY,
       name TEXT UNIQUE,
       description TEXT
);` 

const many_entries_to_many_lists_table_sql = `CREATE TABLE IF NOT EXISTS entry (
       entry_id INTEGER,
       list_id INTEGER,
       custom_weight INTEGER,
       FOREIGN KEY(entry_id) REFERENCES entries(id),
       FOREIGN KEY(list_id) REFERENCES lists(id)
);`
// returns all entrys in order of use