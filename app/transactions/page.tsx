import { ArrowDownUp } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data_table";
import { transactionColumns } from "./_columns";

const TransactionPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="p-6 space-y-6">
      <div className="flex w-full justify-between items-center ">
        <h1 className="font-bold text-2xl">Transações</h1>
        <Button className="rounded-full">
          Adicionar trasnsação
          <ArrowDownUp />
        </Button>
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionPage;
