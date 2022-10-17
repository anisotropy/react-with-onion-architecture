# 어니언 아키텍처 제안

## 계층형 구조

```mermaid
flowchart TD
	subgraph A["Action(Interaction)"]
		subgraph L1["Layer 1"]
			PC["purchase"]
			AC["addCommodity"]
		end
		subgraph L2["Layer 2"]
			SC["setCart"]
			GC["getCart"]
		end
	end
	subgraph C["Calculation(Domain)"]
		subgraph L3["Layer 3"]
			ATC["addToCart"]
		end
		subgraph L4["Layer 4"]
			SOWD["shouldOfferWatchDiscount"]
			OWD["offerWatchDiscount"]
		end
		subgraph L5["Layer 5"]
			AITC["addItemToCart"]
			MC["mapCart"]
			CI["countItems"]
			FI["findItem"]
		end
		subgraph L6["Layer 6"]
			RIP["readItemProp"]
			HIP["hasItemProp"]
			UI["updateItem"]
		end
	end
	AC --> GC
	AC --> SC
	AC --> ATC
	ATC --> AITC
	ATC --> SOWD
	ATC --> OWD
	SOWD --> CI
	SOWD --> FI
	OWD --> MC
	OWD --> HIP
	OWD --> UI
	OWD --> RIP
	FI --> HIP
```

## 어니언 아키텍처 적용

```mermaid
flowchart TD
	subgraph I["Interaction (action)"]
		CA["Component"]
		CA --> HA["Hook"] --> S["Global State"]
	end
	subgraph C["Components"]
		CC["Component"] --> HC["Hook"]
	end
	I --> C
	C --> D["Domain"]
	D --> L["Library"]
```

## 어니언 아키텍처 적용: 파일 구조

```
📦roa
┣ 📂components
┃ ┣ 📜Commodity.tsx
┃ ┗ 📜index.ts
┣ 📂domain
┃ ┣ 📂layer
┃ ┃ ┗ 📜cart.ts
┃ ┣ 📜cart.ts
┃ ┗ 📜index.ts
┣ 📂interaction
┃ ┣ 📂layer
┃ ┃ ┣ 📂layer
┃ ┃ ┃ ┗ 📜cartState.ts
┃ ┃ ┣ 📜useCart.tsx
┃ ┃ ┗ 📜usePurcase.tsx
┃ ┣ 📜PurchasePage.tsx
┃ ┗ 📜ShoppingPage.tsx
┗ 📂library
┃ ┣ 📂layer
┃ ┃ ┗ 📜item.ts
┃ ┣ 📜cart.ts
┃ ┗ 📜index.ts
```
