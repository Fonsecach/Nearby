import { View } from 'react-native'
import { Button } from '../components/button'

import { Welcome } from '../components/welcome'
import { Steps } from '../components/steps'

export default function Index() {
    return (
        <View style={{ flex: 1, padding: 40, gap: 40 }}>
            <Welcome />

            <Steps />

            <Button.Title>Começar</Button.Title>

        </View>
    )
}