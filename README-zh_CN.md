<p align="center">
  <a href="https://ant.design">
    <img width="200" src="">
  </a>
</p>

<h1 align="center">React-Evefyou-Hooks</h1>

<div align="left">

Inheritable state hook library containing getters, setters, actions

</div>

中文 | [English](./README.md)

## ✨ 特性

- 定义可继承的状态钩子并支持 typescript

## 📦 Install

```bash
npm install react-evefyou-hooks
```

```bash
yarn add react-evefyou-hooks
```

```bash
pnpm add react-evefyou-hooks
```

## 🔨 使用

### 定义 store state

```
export const DEFAULT_USER_STATE: UserState = {
    token: '',
    userInfo: null,
    isSessionTimeout: false,
    lastUpdateTime: new Date().getTime()
}

export const userAtom = atom<UserState>({
    key: 'userAtom',
    default: DEFAULT_USER_STATE
});

export const useUserRecoilState = defineRecoilValue({
    name: 'userState',
    state: DEFAULT_USER_STATE,
    getters: {
        getToken(state) {
            return state.token
        },
        ...
    },
    setters: {
        setToken(token: string) {
            this.setProps({ token })
        },
        ...
    },
    useFn: () => {
        const loginMutation = mutationLogin.useMutation()
        const navigate = useNavigate()
        const [, { setProps: setAuthProps, refreshAuthAction }] = useAuthRecoilState()
        return {
            loginMutation,
            setAuthProps,
            refreshAuthAction,
            navigate
        }
    },
    actions: {
        async login(
            params: LoginByUsernameReq,
            options?: {
                goHome?: boolean;
                mode?: ErrorMessageMode;
            },
        ): Promise<Nullable<UserInfo>> {
            try {
                const { goHome = true } = options ?? {};
                const { token } = await this.loginMutation.mutateAsync(params);
                this.setToken(token);
                ...
            } catch (error) {
                return Promise.reject(error);
            }
        }
    },
}, userAtom)
```

### 定义 可继承 state hook

```
export const defineActiveItemsState = <
  T extends KeyItem<K>,
  K = T extends KeyItem<infer P> ? P : React.Key,
  N extends string = string,
>(
  name: N = 'activeItemsState' as N
) => {
  const useKeyItemsState = defineKeyItemsState<T, K>()
  return defineUseState({
    name,
    useState: (initialSt?: ActiveItem<T, K>) => useRelationState({
      itemsState: useKeyItemsState(initialSt?.itemsState),
      activeKeyState: useState(initialSt?.activeKeyState)
    }),
    getters: {
      getActiveKey(state: ActiveItem<T, K>) {
        return state.activeKeyState
      },
      ...
    },
    setters: {
      active(key: K) {
        this.activeKeyState.set(key)
      }
      ...
    },
    actions: {
      removeByKey(key: K) {
        ...
      }
      ...
    }
  })
}

export const useTabsContainerItemsState = defineUseState({
  name: 'useTabsContainerItemsState',
  useState: () => useActiveItemsState(),
  getters: {
    getViewTabItems(state) {
      const items = state.itemsState
      if (items.length === 1) {
        items[0].closable = false;
      } else if (items.length > 1) {
        items[0].closable = true;
      }
      return items
    }
  }
})
```
