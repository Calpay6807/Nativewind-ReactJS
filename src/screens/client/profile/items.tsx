import {Text} from '@components/ui/core/text';
import {TouchableOpacity} from '@components/ui/core/touchableOpacity';
import {View} from '@components/ui/core/view';

type Props = {
  text: string;
  value?: string;
  icon?: any;
  onPress?: () => void;
};
export const Items = ({text, value, icon, onPress}): Props => {
  const isPressable = onPress !== undefined;

  const Container = isPressable ? TouchableOpacity : View;
  return (
    <Container
      onPress={onPress}
      className="flex-1 flex-row justify-between p-3">
      <View className="flex-row items-center">
        {icon && <View className="pr-2">{icon}</View>}
        <Text className="font-bold" variant="lg">
          {text}
        </Text>
      </View>
      <View className="flex-row items-center">
        <Text variant="sm">{value}</Text>
        {isPressable && (
          <View className="pl-2">
            <Text variant="sm">{'>'}</Text>
          </View>
        )}
      </View>
    </Container>
  );
};
