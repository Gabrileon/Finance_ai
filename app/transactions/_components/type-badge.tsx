import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TranssactionTypeBadgeProps {
  transaction: Transaction;
}
const TransactionBadge = ({ transaction }: TranssactionTypeBadgeProps) => {
  if (transaction.type == TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted text-primary hover:bg-muted font-bold">
        <CircleIcon className="fill-primary mr-2" size={10} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type == TransactionType.EXPENSE) {
    return (
      <Badge className="text-danger hover:bg-muted bg-danger bg-opacity-10 font-bold">
        <CircleIcon className="fill-danger mr-2" size={10} />
        Gasto
      </Badge>
    );
  }
  return (
    <Badge className=" text-white bg-white bg-opacity-10 font-bold hover:bg-muted">
      <CircleIcon className="fill-white mr-2" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionBadge;
