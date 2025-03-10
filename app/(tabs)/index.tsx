import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, Button , ScrollView ,Alert, TouchableHighlight,} from 'react-native';
import Login from "@/constants/Login ";
import About from '@/components/About ';
import {Link,useRouter } from 'expo-router';
// import {Profiler } from "@/assets/images/profile2.jpg";

export default function Index() {
    const router = useRouter() ;
    const showAlert = () => {
        Alert.alert(
        "Alert Title",
        "This is the Content",
        [
          {
            text: "Cacel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },
          {
            text: "Yes",
            onPress: () => console.log("Yes Pressed"),
          },
        ],
        { cancelable: false }
      );
    };
    return (
    <ScrollView style={{flex: 1}}>
    <View style={Login.container}>
    <View style={Login.spacing} />
    <Image source={{ uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEX///8BsPEoJyz///3///sArfEAsPAArPEArvAoJyv//v8oKComJSoAAAAAqu4AsPOS1PYArPQcGyEgHyPH6/l4yvQTEhnv7+/19fUaGB/k5OQAAAgkJCcVFBoAqu0MDBCg2flbw/OQ0fbX19i8vL3Hx8cVFReioqN/f4AwMDMdHR+NjY5wcHHr+PtFvPHg9PtFRUhdXV6tra6GhodVVVio3fSenp8EAA+J1vHBwcHk9PnQ7Pt+0PK65vhmZmrb29s9PT9cxewMs+Ow3vZtyOqh3O7G6/E9u+pYWFpCu/UApvNAQUGI1fRWwPe84/hyyfnIK42mAAAS5klEQVR4nO1di1faShNP2EeWgITwEgTBiG9NsCpaAevr9pF+1v7//803MwkqdeNtlWq8J797Tg+SZNnJzM5jd2auYWTIkCFDhgwZMmTIkCFDhgwZMmTIkCFDhgwZMmTIkCFDhgwZMmTIkBYwhv8u9tc29z4d7e/vH33Y2z1YX2q+9bzmCPv8YG+/1Wg0KpVqsVisVivL8Mf20e7p4ltPbR6w17e2G41WNZ/P5+5RyOeK1VajcrS59NYTfCHOD3O9SjGXiGpj+dua/dazfD7Wj3qtYoF4VsgVKyCovTbgpLEM4hrTWKz2dnbfqbSuXyxUQTJROCsb7YVt0C+n6/3z8/762ubhh+pCb6dTwIv54nL78B3S2N9vF6OVV+m1P2z2H4ni4unuRbsRs7KycPzOZLW5tVCNhLDR2DtlSbctHeyftIokxb3C+mtO8KVY7yznYenlOr2Lg3+xe+eHOxvEyOLC3rsxkfbhQgcNQrF39Dt8aR4XlonG5ffCxqX9Rh74V+xdnP7mE83jSgW5WFw4/qszmxPWqxXSHZXNP3hoca9NbOy9A0ldi6ba+PQnzgqootNtejHLR6m2GzDRTSKw2vgTBkZY/NSDR/OVizT7cczYXCAJ3e4bzzBvxz16O6km8YA4+ExJY8bpDjxe2LlIr6CutcnGf3q2e9IvVJDE/bSqmz75YI2tFwyxtA2uUH7j09zmNFcs4uxyjb0XDQIk5nP53u6c5jRffEB133rp6z/fAX8ot7A2lynNF8c9VIT7Lw4R1lHWO730aZt+j8LZxInZBmO4J8UIhp0YbxgHJxA1V47+yixfAHsfF+HCE64zZ9wfDQg+YzyZQmNrGQLL3sH8J/kibCILkxQEQ2+nNglLVqlrlSxXSG84gK8TJJr9r5orFFMmp0udIi5C/UUQSv+jtKQQZgwprW5Q40mM7PeAiZWXKeV5Y6sFLDzp6y8yNpSuUqZjSfOORlN1vw6SRPVwOVfMLSQM9yZY2gAVv3yovcaY77kC+QZEmg9IlKo7JPl9jOZ2p5Crfvirc/4zbLXyuWJB72vxATFQA+mWJglcXEM57aWHiUsboN+1ARMYhYEUUvxKG4krfK8mCUPug1BU0uO87W6AKdzWsZAz/wolNOYZCKoSQgknItF0pDvUc/G0ncvnGmmJo5rboEgb2i0Wm10KGYuocmXgEa5K1pRo6Y71JF4U87mWfmW/NhgtmgRvhp11Y2aZXTn0Y2LYoK6EJHXjmAHjOgfnoFFIXNqvDGZ8Anemoo+ZuGnFAtq9eUgGHwSxdZTWkGm52CuArvnd3bq/i0U8XNLqPdsYurGIWrWHZIBnan+NaDdFyLnOuTncSY3VX2tALHChuQB0BGTkpSxdP+ITD4R0kES3pqWwvwBimkuFmG7By27pPFKbj1wTZdFxLx8RwdhIOaRu1E+9mGKg2EjDLrgNmjTf083E5itdx1GmFN2RzX+5CAyeWE6khfQUblUS3txrY2khyRja7B9hOo5jCk/75CCyiqo70l4+hXCl+m2OM30u0FZU9d4H/wpMAhLFUHuZyUjZdG+1lxfx1XXefCEyY7eVyy/rT1R4AJYdpFSO9c96kcFwr/VjX3TS4Jsy4wOEqwkKgV+5Di61rj5MAn/nSQpRhfXefEuK2RegaFp6B5JfkXcmuwP9w5dW5A0kUHgM7u7O26uaJljDxMAphLAXdUkChf+oiEL9MgVVA0Hi29v8pXbiHiLjVwJpcEoJFE6e5mG/DRS+/Z5b/ySnV6U2WLwrS6A2LQ1rOowvXTIXpRVu617RIno1Wjv0qkAKd/SixIauQ1GSEKUSRIXTf6YfVRxCKWlrbX4TzUXxzSlcRwp1gQUzfIjuyfWU4NiAXQSzQf+YRDd8dOLwwl3R7rrZO3gOkgoKtb4V45Mu0OdE205a3H0tm9qFDP5gof3m26aJFHJfOXrCHqOk3csgj3chvRQy33q0wwYenAQxfcRS8VHrEiCFKeGhbj+F+aXHFErpKku6v5Kop5C18ET5zdch6lJtKK6j0Op6n4c/LfF7FKZElxKFOnuIFD6kBFSo8KI4afJdOjNEqhvd0IuJcdmrgnyaI40qBAqFM6NrxA9OSSiMfXTlb1DYb6ciQFw8SXjRv0oprMEmHo0ihTywZii0yjopPUV36e39UlLputiC+TNC6kirfn8M87k0uw611uIYnPrlt48tjKNqrqOLD5kxK4m4gX8nzF+uZo4yrMdbcUa0UfP28aFhHFYgxtecyjAWyhlnxrq933D7MquD3JqOwotOPgUxPm6/JwQX7NIyZ45EV++8T3a3U0wCbEpfQyGEFoUU7NMYxnlbr2oY/1ySDxllSn63pRg8XKNSfdV53hAAF1KgSiNVk2s8FibGRnLW5FsTjmkmtsGHXechgaKs2/VOzX6psZc4E2+WQuWuGpzZnK8o9UB+HSVGuvgQkx+0O82vDlyIRW0axtms1XNM9wqtyFfXFQ/0rJSXTHO+lqJzi8VlvZjifqmc9WpoKY7kLOHm9y+PH2WU3pGOsyfaMc21tGH+l+7sCb6SnLHBL2S7/2gTMjBhOCXnh8YBngHr1LptTLqPKOQD8MHvg2OlpP/rqU08aD4lZ8AQ5RQwm0abu87DWSZKBjxU4uGXeJCv4eF2sZBPyTk+4LCV4H3bzA/FTJ4QSenD9JrutaEzFRBYF/KN878/99/DEq0ZPROBxAcy6UwG40thTv92hJtwir9fzBfAU0pNQRuaRO2i4cBFr3tvGqTrdl15R6GQNaY94l4DfyYxT+4t0AeTmIdA5xE/wIOxeVlZuG+KYb1yorN7cuJEyRtxbQpmcxuc7kqK8toYMbEAcYBW4vjgsqTUw71FKYVpWcEZSxDD3UYhl09VbqKxVH0iv9TmbDC5+i4tdQfXld4ZxPqPuY4AkSikxNrfA+PxhMwvgwqijPGwHoQylIDQWz3zo281BDLMqM53Gm++UTqLJuZ555/I8wZmgbWnNHbO/iXPu1EoFE7SludNufr5J3L1DRu0DpviiVR98GawOOxIv6bfErtzqrfooyOfT1kee4QjrEdYfmnW61KnmtaaGWNxp5jLFzb2XiBeLKp7yjVS45DOot/OgzPZe2ntWj7XSsPujBZrC9gEo/d8QV0qoEauXqQkaNJgs43tETaeVyHJjPWoTHY7jVpmimOqA97ZfpbDtbkA3igQmJb8dT2OT1DXdzCU+kO70fzUBl8tV0k5gWivqR6//eEPJ3paoHr81n6aRTTCepW6mlRam3+wGhf3TuJGBelVMvdY2qdmJYXe/37XbDePd3awk0YxpfW/j2BvkaTCajz6nR5Qi8c5LAwDCd1Oyebhb2BtezlqdNXb/7dmXv3DQqOI3ZQ6vU/pX4L3WNzqTXsMdfbWEmd+vnm0gfKZzxU3tlPpij6B/rcpjdVG59vu+uIv8tpcWtva32hUqZdUsVXZfQ8q5hecHrWj+QORG72di09bxwdr64C1g+OtD9sbvUo16vXVWd7YSrsRTMD6t3bcji6fz3eqOxu9BqLX2KhUYe3lsY0brNXO7julD3G+u33ysOceUJXHFkvUYxA+Vxu9b//WKyvtsNcPL9qNnU7My3tii9XWSePbu++bGGHpYG+/t9DrLbdaFfiv1Wr02guoft459+5AMX9zaf3geHf38PBwd/d4c239Pdm+DBkypBip27SeEziLEg8SWl78BzA9f0nPCfXvgdnIFDrtg3+SeufQnawcAqSvP6DXnBjyhDtfFzY3OK+Vva9BUF8ZPDkl7gllKpl0CzPKv2BFl0/z6gD2lR3swiKwdYc3SiaRMyyMVT8SRxq41gxcLw085GwQWHc5oY6Q2mxCAvMFZnUntWVh7MydSSIyxYo2HeN1ge0BHpSBONINkimslZ6omjQwNWOWQquWAq3LeaiwCEQoaUnHgY+lQdLiYUOsDLX05duYOuzBKnVMS0zh+k+dCL8S2LWFVYTiavW6bFJNoThL5GEdpVT5iWOFCnNp6vdIgZAaPCTZvGScc9/F5GZ9hQSCBXBZhYn60VfUrub+ccw5mfeE/xgDTK1X1L/CZl8xaUtghQSmwwDRaCDZnVVjVL3tIYV0LeolGN0FX7IxCbE3QxSPx4mcBR6locR5G/SVMX0LfNqZcHphThhiPV03bszl4R8WSqk/uQH4/iRUKpjWGgwwGVGVMWmd35RvbsofgS6+gp8mSOE1Fj+L+sz4jPnl0BTSqw1wyCEReAZP3FyzW0+W4EIsyowPyj+kKrkirI/naEfrqEet24iEEJPSStgmofYdFIWqUSWlY3nRD55FLwCJ4S5c7yK7eAiaRUn8sm5hFdtskQwbulj37CgrFMKyygbq3AC+K5Xr30F4TKsbt5PyPTDK2E9ESeXW50QiiAJ28IiIgr9KmIIn0f8cYq6ajGtCJbYogXvJGLioasG2o05ZQW5T2l4dB/As+rgSw0fJG96VQaEWss7wdziZVSkjK0xMxwKHuOEL3Vy6nZOUMiOyYLSM2Bgb6KkAfFNWp2w8acatEWokXB5IIdafwx+3KJDUP2mA1lSs4GghvhURpbdZYCpQRF2acpxYK0v4qvgIqcb2NtGXIeoAcAix95uworRc8XM+FILo44+pAP1tDtMGTaN+glYFrYlLzg0pYVSWxuig81DAew/op8sosAKrKs+w2U6pBiP4UauMqB5YqhDnXZdoYl1w15FF0sQfZTWXOhGaQfQaQxIKYaI0D8dnHr4jMZmPmDKYn0kyRlI6EeRpoR5T1P5wwMiYKOoNwRlaThXZOM+ZauAyPqRGHFXpw1IE9ROHRPOjVA34hrx0AlKXK/gqrInN6O2QhMNHvPOMc6MG71EKbUHYMyjk5YgoTlJKhTBWDRO2Se+vgJ73kCxhID/AGIDGWKG3gdxS5N95JFSo5ocWLttpFmZpBW6jcUD72qypiBjkDP+JxMomZyOUdbWKFF6X0Cn2xr5BJVTNuWmamKhI0WDkYMLysfkt/p6Fqy+YrhQWeT+0JGF5waKBqcHipGUWoNmoK/oYNd/zfqCKjOzHGOzLGJ1yciZA2lGYQ5CgGsk69iFigxK4jFLBS/TKNT43T4GRl2JaI3q1vkuiOWWttFA2qfmFRxSCzwZ6xEfXYIzqxRqCaUY/xhQTeCYayx1MEzFxzFW8r4sFete4sLs1GghrbCUK8YqaWieGwoJ6zoQ4wA0TOqY8g0IiwLR8TJokv1oqj8WslQI1JRmAMnYo4T/w1Zscdc5QwLKygDeMeGNdcxiAVIlocmOaiGkYARkApHlC7PJtwwY3irQv6KZLpFBFOZvso2NZoG6c6DXPiYfcpjYy1heOcT6uIjDYKEeo+MBsGMYtLcgzsJDwpYLV4+Fk+IQ4N7DBcAqUbNS1I3Lhw4fO9lSE4ZEAjIMKiexb1C9uDT4GqLtDMFU2+XWD69WfAfW5w1+cC4WMRWpP3g4G15J6kSoc2Uc7SDqOjLwcc2z37OLarJPbSAIphpwPQiqFJRMZicBDCn0HpVQOOK+RSxty3Ka7QbUpRjCig6sZHCYkDjBE2UbnVsHQcyEQ/SeqIYAVblG3XLN0g0NHKnAFPlEnHRF6E8a+uCSlHjIiKrAUIVUGCRRdg9auIrfsnkJqPwBBdeBGHosXjsBxoJ9EN4YkSP0IfGMCHpvlXt6Oax5KijsvHtpsZaaThYMSBd9fkxVHZeiRUYaJM16LtiiEBKkKIn8kclWAcUbc3ssRZ7MUimm/Vit6ky4seSQblwCPKITRDVbGO8kTssij8+e0EGFNzZS70pKB78u0+nBP6iaaBHqg44getILsroQ04iUyjoXk381qQc+MnU0VRDUZro3F/AqcUdBNfjyKMPjgO3XukTHTEwqKngU/tFQkoNIS5Vg2Agv33fBXfIEbHML9zLBYDQy+sgJYiOOuiHoohUCCUOgm8xIKmpp9gyNsgw1mzh2OS0rhUKB9u3BjaYjCArIJP+zCQ3wIP4mTUFJY6vM8NyEZP6uH5BJ6Qz9uW8VXy6urq7RPxkce+FABLgvmT9DfvGmi4h2g2yaCwRCmHTX8GtXhofJsjwhQJhN4K443ZvwWvFBZHwGFq4gBvkw+xNCx7lMzzZtAKoEW/9qfY/xLnSxgPB+rQO4ia5usNQksGkfcTor3xeE+LHfi/AvIpPWRcbRoyqLb49D/0eD4DNga/GRwFp/qTPfYueHTVrmNFgVupWoUrm+f9ZrgNQFuG/jgDCTXdH6kYDdmvuCGidrCtyH4Iu8tFXv38wRbAZ0jFUYeqF9F0knNOwbumypQTT/Q4FvlOVnnFIHXkUCwAejJiuRTgPcLfhY7YRiAyCcOq94twEh8j/+XAaVg9N+TUTRj9o0sWV2rJNG9+g9SSAZ7ULutjXg6jrH/AmxwbJB5TxaMZsiQIUOGDBkyZMiQIUOGDBkyZMiQIUOGDBkyZMiQIUOGDBkyZMiQIUOGDBn+a/g/9a1/Mnut5cUAAAAASUVORK5CYII=' }} style={Login.logo}/>  
    <Text style={Login.title}>Log in</Text>
    <TextInput style={Login.imput} placeholder="Email" />
    <TextInput style={Login.imput} placeholder="Password" secureTextEntry />
    <TouchableOpacity style={Login.button}>
    <Text style={Login.buttonText}>LOG IN</Text>
    </TouchableOpacity>
    <About/>
      <Link href='/contact'>Click Here</Link>
      <Button  title="Click Test" onPress={()=>router.push("/contact?namePLUEM&major=IT")} />
      <Button title='click Test'onPress={() =>router.push({
          pathname: '/contact',
          params: {
            name: 'PLUEM',
            major: "IT",
            email : '123@gmail.com',
          }
        })} />
        <Button  title="Go to Profile Id" onPress={()=>router.push("/user/123")} />
        <Text>&nbsp;</Text>
        <Text style={{ alignItems: "center" }}>Use Image</Text>
        <Image source={require('@/assets/images/001.jpeg ')}
        style={{ 
          width: 150,
          height: 150,
          borderRadius: 100,
          marginHorizontal: "auto",
        }}
        />

        {/* <Image 
        source={Profiler}
        style={{ 
          width: 120,
          height: 120,
          borderRadius: 100,
          marginHorizontal: "auto",
        }}
        /> */}
        <TouchableHighlight
          underlayColor="white"
          style={{
            backgroundColor: "skyblue",
            paddingVertical: 20,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={() => {
            showAlert();
          }}
        >
          <Text>Show Alert</Text>
        </TouchableHighlight>

        <StatusBar style="auto" />
    </View>
    </ScrollView>
  );

}

