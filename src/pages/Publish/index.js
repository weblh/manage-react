import { forwardRef, useImperativeHandle, useRef } from "react";

// 子组件
const Child = forwardRef((props, ref) =>{
    const inputRef = useRef(null);
    // 子组件的input获取焦点
    const focusInput = () => {
      inputRef.current.focus();
    }
    // 暴露函数给父组件调用
    useImperativeHandle(ref, () => {
      return {
        focusInput
      }
    })
    return(
    <div>
         <input type="text" ref={inputRef} />
    </div>)
}
 ); // 转发ref
const Publish = () => {
    const myRef = useRef(null);
    const showRef = () => {
        console.log(myRef.current);
        // 或者执行其他操作
        myRef.current.focusInput();
        // myRef.current.focus(); // 聚焦到子组件的input
    }
    return (
        <div>Publish
            <Child ref={myRef} />
            <button onClick={showRef}>展示子组件的ref</button>
        </div>
    );
}
export default Publish;