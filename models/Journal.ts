import { Client } from "./Client";
import { JournalLine } from "./JournalLine";
import * as yup from 'yup';


interface JournalDTO {
    code: string,
    account: string,
    amount: number,
    operation: string
}

class Journal {
    
    date: Date;
    client: Client;
    concept: string;
    lines: JournalLine[];

    constructor(date: Date, client: Client, concept: string){
        this.date = date;
        this.client = client;
        this.concept = concept;
        this.lines = [];
    }

    getTotalDebit(): number {
        return this.lines.reduce((acc, line) => acc + line.debit, 0);
    }
    
    getTotalCredit(): number {
        return this.lines.reduce((acc, line) => acc + line.credit, 0);
    }

    validateTotalsAreEquals(): boolean {
        return this.getTotalCredit() === this.getTotalDebit();
    }

    addLine(journalDto: JournalDTO) {
        let schema = yup.object().shape({
            code: yup.string().required(),
            account: yup.string().required(),
            amount: yup.number().required(),
            operation: yup.string().max(1).required(),
        });

        const validatedData = schema.validateSync(journalDto)

        if (journalDto.operation === 'C') {
            this.lines.push(new JournalLine(
                validatedData.code, 
                validatedData.account, 
                0, 
                validatedData.amount, 
                this
            ))
        } else {
            this.lines.push(new JournalLine(
                validatedData.code, 
                validatedData.account, 
                validatedData.amount,
                0, 
                this
            ))
        }
    }
}


export {
    Journal
}

/* const client = new Client('Juan', 'Perez');
  const journal = new Journal(new Date(), client, 'Venta de computadora');
  
  
  journal.addLine({ 
    code: '110505', 
    account: 'Caja',
    amount: 2200,
    operation: 'D'
  });
  
  journal.addLine({ 
    code: '110505', 
    account: 'Caja',
    amount: '2200',
    operation: 'C'
  });

  journal.addLine({ 
    code: '110505', 
    account: 'Caja',
    amount: '1200',
    operation: 'D'
  });
  
  journal.addLine({ 
    code: '110505', 
    account: 'Caja',
    amount: '1200',
    operation: 'C'
  });

  console.log(client);
  console.log(journal);
  console.log(' Total Debit:::::',journal.getTotalDebit());
  console.log(' Total Credit:::::',journal.getTotalCredit());
  console.log('Los totales son iguales?: ', journal.validateTotalsAreEquals());


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to sta!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
