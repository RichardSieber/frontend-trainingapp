import React from 'react'
import Athletes from '../athletes.json'


/*const DB = () => {*/
function DB() {
  return (
      <div>
          <Names/>
      </div>
  )

}
const Names = () => {
    return(
        
        <div>
        {
            Athletes && Athletes.map( athlet => {
                return(
                    <div key={ athlet.id }>
                        {athlet.name}
                    </div>
                )

            })
        }
        </div>
    );

};

export default DB
/*
class DbFunctions {

    getNames(){
        return null;
        //get name of athlets from database (Array)
    }

    sendSheet(){
        return null;
        // send filled sheet to database
    }
    
}*/