import {Text} from '@components/ui/core/text';
import {View} from '@components/ui/core/view';

type Props = {
  children: React.ReactNode;
  title?: string;
};

const ItemsContainer = ({children, title}): Props => {
  return (
    <View>
      {title && <Text variant="lg">{title}</Text>}
      <View className="rounded-md border-[1px]">{children}</View>
    </View>
  );
};

export default ItemsContainer;
